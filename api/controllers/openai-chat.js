//SAMPLE CODE FROM NODE_MODULES OPENAI README
// Load environment variables from .env file
import { config } from "dotenv";
config();

import OpenAI from "openai";
//for user input
import readline from "readline";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
  organization: process.env.OPENAI_ORG,
  project: process.env.OPENAI_PROJECT,
});

//Cool module readline to read input from input box
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Ask User for Input
rl.setPrompt(`Hello Silver Surfer, how can I help you today? `);
rl.prompt();
//Send Request to OpenAI API
rl.on("line", async (input) => {
  //const res = OpenAI;
  // const completion = await client.chat.completions.create({
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 100,
      messages: [{ role: "user", content: input }],
    });
      console.log(res.choices[0].message.content,
        "\nTotal tokens: " + res.usage.total_tokens
      );
    //Ask another question
    rl.setPrompt('Can I help you with anything else?')
    rl.prompt();
  });