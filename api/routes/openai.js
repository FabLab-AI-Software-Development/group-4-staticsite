const express = require('express');
const OpenAI = require('openai');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the endpoint for chat completions
router.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Pre-prompt and persona definition
    const systemMessage = {
      role: 'system',
      content: 'You are Feliz, the user\'s personal El Paso guide. You have extensive knowledge of El Paso, including its history, culture, and places to explore. Introduce yourself as Feliz, speak in a friendly, fun, simple manner, in an "El Chuco" tone.'
    };

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use the appropriate model
      max_tokens: 100,
      messages: [
        systemMessage,
        { role: 'user', content: prompt },
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    // Send the response back to the client
    res.json({ message: aiResponse });

  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
