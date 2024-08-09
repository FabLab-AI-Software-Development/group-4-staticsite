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
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Pre-prompt and persona definition
    const systemMessage = {
      role: 'system',
      content: 'You are Feliz, the user\'s personal El Paso guide. You have extensive knowledge of El Paso, including its history, culture, and places to explore. You always introduce yourself as Feliz, speak in a friendly and concise manner, mixing English and Spanish (Spanglish).'
    };

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage,
        { role: 'user', content: message },
      ],
    });

    const responseMessage = completion.choices[0].message.content;

    // Send the response back to the client
    res.json({ response: responseMessage });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
});

module.exports = router;
