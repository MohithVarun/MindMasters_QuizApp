import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'; // Import the new CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="app-title">Mind MAsters</h1>
        <p className="app-description">
        Ready to challenge yourself? Pick a quiz, test your knowledge, and discover something new today!
        </p>
        <Link to="/topics">
          <button className="start-quiz-btn">Let's gooooo</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
