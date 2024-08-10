const { OpenAI } = require("openai");
const { Client } = require("pg");

class PostgresEmbeddingsService {

    #openai;

    #pgEndpoint = {
        host: 'localhost',
        port: 5432, 
        database: process.env.LOCAL_DB,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    };

    #client;

    constructor() { }

    async connect() {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        this.#client = new Client(this.#pgEndpoint);

        await this.#client.connect();

        console.log("Connected to Postgres");
    }

    async searchPlaces(prompt, matchThreshold, matchCnt) {

        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const client = new Client({
            host: 'localhost',
            port: 5432, 
            database: process.env.LOCAL_DB,
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        });

        await client.connect();
        console.log("Connected to Postgres");

        prompt = prompt.replace(/\n/g, ' ');

        const embeddingResp = await openai.embeddings.create(
            {
                model: "text-embedding-3-small",
                input: prompt
            }
        );


        const embeddingArray = embeddingResp.data[0].embedding; // Assuming this is an array of floats
        const query = `
        SELECT name, description, date, cosine_similarity
        FROM (
            SELECT name, description, date,
                   dot_product / (norm_a * norm_b) AS cosine_similarity
            FROM (
                SELECT name, description, date,
                       (SELECT SUM(a * b) FROM UNNEST(description_embedding, $1::float8[]) AS f(a, b)) AS dot_product,
                       (SELECT SQRT(SUM(x * x)) FROM UNNEST(description_embedding) x) AS norm_a,
                       (SELECT SQRT(SUM(x * x)) FROM UNNEST($1::float8[]) x) AS norm_b
                FROM "Event"
            ) AS sub_calculations
        ) AS final_results
        WHERE cosine_similarity > $2
        ORDER BY cosine_similarity DESC
        LIMIT $3;
        `;
        
        const res = await client.query(query, [embeddingArray, matchThreshold, matchCnt]);

        let places = [];

        for (let i = 0; i < res.rows.length; i++) {
            const row = res.rows[i];

            places.push(
                { "name": row.name, "description": row.description, "date": row.price, "similarity": row.similarity });

            console.log(`${row.name}, ${row.similarity}, ${row.price} \n ${row.description}`);
            console.log("\n\n--------------------------------------------------");
        }

        return places;
    }
}

module.exports.PostgresEmbeddingsService = PostgresEmbeddingsService;