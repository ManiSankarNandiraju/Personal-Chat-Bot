import React, { useState } from 'react';
import './Chatbot.css';
import './App.css';
import Chatbot from './Chatbot'; // Import Chatbot component

// Import your button image
import chatbotButtonImg from './img/ICON.png';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="App">
      <button className="chat-button" onClick={toggleChatbot}>
        <img src={chatbotButtonImg} alt="Chatbot Button" /> {/* Use the image here */}
      </button>
      {showChatbot && <Chatbot />}
    </div>
  );
}

export default App;
