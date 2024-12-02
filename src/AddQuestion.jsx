import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Styles/AddQuestion.css';

const AddQuestion = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = value;
    setNewOptions(updatedOptions);
  };

  const handleSaveQuestion = () => {
    if (!newQuestion.trim() || newOptions.some((opt) => !opt.trim()) || !correctAnswer.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    const storedQuestions = JSON.parse(localStorage.getItem(`questions_${topic}`)) || [];
    const updatedQuestions = [
      ...storedQuestions,
      { question: newQuestion, options: newOptions, answer: correctAnswer },
    ];
    localStorage.setItem(`questions_${topic}`, JSON.stringify(updatedQuestions));
    setConfirmationMessage(true);
  };

  const handleBackToTopics = () => {
    navigate('/topics');
  };

  return (
    <div className="add-question-container">
      <h1>Add Question: {topic}</h1>

      {confirmationMessage ? (
        <div className="confirmation-message">
          <h3>Question added successfully!</h3>
          <button onClick={handleBackToTopics} className="back-button">
            Back to Topics
          </button>
        </div>
      ) : (
        <div>
          <div className="question-input">
            <label>Question:</label>
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter question"
            />
          </div>
          <div className="options-input">
            <label>Options:</label>
            {newOptions.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
            ))}
          </div>
          <div className="correct-answer-input">
            <label>Correct Answer:</label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              placeholder="Enter correct answer"
            />
          </div>
          <button onClick={handleSaveQuestion} className="save-button">
            Save Question
          </button>
        </div>
      )}
    </div>
  );
};

export default AddQuestion;
