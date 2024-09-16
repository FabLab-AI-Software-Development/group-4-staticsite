//get env variable ***very important; put at very beginning
const {config} = require('dotenv');
config();
//this works too!
// require('dotenv').config({ path: '../../.env' });

const { OpenAI } = require('openai');
const { Client } = require("pg");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// console.log('apikey', openai)

const pgEndpoint = {
    host: 'localhost',
    port: 5432, 
    database: process.env.LOCAL_DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

// console.log(process.env.DB_PASS)


//Embeddings error pre-checker
function checkEmbeddingValid(embedding) {
    if (embedding == undefined || embedding.data == undefined || embedding.data[0].embedding == undefined) {
        console.log("Error generating an embedding: " + JSON.stringify(embedding));
        return false;
    }

    if (embedding.data.length > 1) {
        console.log("Unsupported: more than one embedding returned: " + JSON.stringify(embedding));
        return false;
    }

    if (embedding.data[0].embedding.length != 1536) {
        console.log("Unsupported: embedding length is not 1536: " + JSON.stringify(embedding.data[0].embedding.length));
        return false;
    }

    return true;
}

//Embeddings generator
async function main() {
    const client = new Client(pgEndpoint);
    await client.connect();
    console.log("Connected to Postgres");

    let lastId = 0; 
    let totalCnt = 0;

    while (true) {
        console.log(`Processing rows starting from ${lastId}`);

        const res = await client.query(
            "SELECT \"_id\", description FROM \"Event\" " +
            "WHERE _id > $1 and description IS NOT NULL ORDER BY _id LIMIT 200", [lastId]);
        const rows = res.rows;
        const length = rows.length;

        if (length === 0) break; 

        for (const row of rows) {
            const { _id: id, description } = row;
            const cleanDescription = description.replace(/\*|\n/g, ' ');

            const embeddingResp = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: cleanDescription,
            });

            if (!checkEmbeddingValid(embeddingResp))
                return; 

            await client.query(
                "UPDATE \"Event\" SET description_embedding = $1 WHERE _id = $2",
                ['{' + embeddingResp.data[0].embedding.join(',') + '}', id]);

            totalCnt++;
            lastId = id; 
        }

        console.log(`Processed ${totalCnt} rows`);
    }

    console.log(`Finished generating embeddings for ${totalCnt} rows`);
    process.exit(0);
}

main();