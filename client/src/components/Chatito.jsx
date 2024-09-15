//9.15.24 per OG
import React, { useState, useEffect, useRef } from 'react';


const Chatbot = ({ initialMessage }) => {
  //This is start up message chatbox starts with
  const [messages, setMessages] = useState([{ text: initialMessage, sender: 'bot' }]);
  //????
  const messagesEndRef = useRef(null);

  //at start input box should be empty
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

const handleSubmit = async (prompt) => {
    const response = await fetch("/api/openai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });

    const data = await response.json();
    return data.message;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = prompt;
    setMessages([...messages, { text: message, sender: 'user' }]);
    setPrompt('');
    handleSubmit(message).then((response) => {
      setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        const prompt = e.target.value; //Get message value from input field
      handleFormSubmit(prompt);  //Pass message value to handleFormSubmit
    }
  };

  //function brings chatbot message into view
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="chatbot">
      <div className="chat-input">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your prompt..."
        />
         <button type="submit" disabled={prompt.trim() === ''}>
            Send
          </button>

          </form>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Chatbot;