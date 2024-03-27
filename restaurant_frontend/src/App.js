import React from 'react';
import './App.css';
import Header from './components/header.js';
import Chatbot from './screens/chatbot.js';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <main className="main-content">
        <section className="chatbot-section">
          <Chatbot></Chatbot>
        </section>
        <aside className="favorites-section">
          {/* Joanna's favorites will be listed here */}
        </aside>
      </main>
    </div>
  );
}

export default App;

