import React, { useState, useEffect, useRef } from 'react';

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

  const sendMessage = () => {
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