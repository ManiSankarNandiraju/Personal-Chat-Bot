import React, { useState } from 'react';
import './Chatbot.css';

// Import the model JSON file
// import model from './model.json';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);

      const botMessage = getBotResponse(inputValue.toLowerCase()); // Convert input to lowercase
      if (botMessage) {
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, botMessage]);
        }, 500);
      }

      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const getBotResponse = (input) => {
    let botResponse = null;

    // Dummy logic for demonstration purposes
    // Replace with actual model prediction logic
    if (input.includes('education') || input.includes('qualifications')) {
      botResponse = { text: "I have a Bachelor's degree in Computer Science from XYZ University.", sender: 'bot' };
    } else if (input.includes('experience') || input.includes('work')) {
      botResponse = { text: "I have 3 years of experience as a software engineer.", sender: 'bot' };
    } else if (input.includes('skills') || input.includes('abilities')) {
      botResponse = { text: "My skills include programming languages such as JavaScript, Python, and Java.", sender: 'bot' };
    } else {
      botResponse = { text: "I'm sorry, I couldn't understand your query.", sender: 'bot' };
    }

    return botResponse;
  };

  return (
    <div className="chatbot-container">
      <div className="header">Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
