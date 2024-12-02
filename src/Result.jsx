import React, { useState } from 'react';

const Result = ({ score, total }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentScore, setCurrentScore] = useState(score);
  const [currentTotal, setCurrentTotal] = useState(total);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="result-container">
      <h1>Quiz Completed</h1>
      {isEditing ? (
        <div>
          <label>
            Score: 
            <input
              type="number"
              value={currentScore}
              onChange={(e) => setCurrentScore(e.target.value)}
            />
          </label>
          <label>
            Total: 
            <input
              type="number"
              value={currentTotal}
              onChange={(e) => setCurrentTotal(e.target.value)}
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Your score: {currentScore} out of {currentTotal}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <button>Take another quiz</button>
    </div>
  );
};

export default Result;
