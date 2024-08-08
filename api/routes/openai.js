const express = require('express');
const OpenAI = require('openai');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this key is correctly set in your .env file
});

// Define the endpoint for chat completions
router.post('/chat', async (req, res) => {
  const { message } = req.body; // Get the user message from the request body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Ensure this model is available to your API key
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
    });

    // Extract the response from OpenAI
    const responseMessage = completion.choices[0].message.content;

    // Send the response back to the client
    res.json({ response: responseMessage });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
});

module.exports = router;
