import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Chatbot = ({ initialMessage }) => {
  const [messages, setMessages] = useState([{ text: initialMessage, sender: 'bot' }]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const sendMessage = async () => {
    if (inputText.trim() !== '') {
      // Add the user's message to the chat
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      const userMessage = inputText;
      setInputText('');

      try {
        // Send the message to the backend
        const response = await axios.post('http://localhost:3001/api/openai/chat', {
          message: userMessage,
        });

        // Add the bot's response to the chat
        setMessages(prevMessages => [
          ...prevMessages,
          { text: response.data.response, sender: 'bot' }
        ]);
      } catch (error) {
        console.error('Error getting bot response:', error);
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'Sorry, there was an error processing your request.', sender: 'bot' }
        ]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button 
          onClick={sendMessage}
          disabled={inputText.trim() === ''}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
