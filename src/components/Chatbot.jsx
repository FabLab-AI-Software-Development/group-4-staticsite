import React, { useState, useEffect } from 'react';

const Chatbot = ({ initialMessage }) => {
  const [messages, setMessages] = useState([{ text: initialMessage, sender: 'bot' }]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // You can add effects here, like scrolling to the bottom of the chat
  }, [messages]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Here you would typically call a function to get the bot's response
      // For now, let's just add a placeholder response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "I'm a bot response!", sender: 'bot' }]);
      }, 1000);
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
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button 
          onClick={handleSendMessage}
          disabled={inputText.trim() === ''}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;