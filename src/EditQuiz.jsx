import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Styles/EditQuiz.css';

const EditQuiz = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem(`questions_${topic}`));
    if (storedQuestions) {
      setQuestions(storedQuestions);
    } else {
      fetch('/Qdata.json')
        .then((response) => response.json())
        .then((data) => {
          if (data[topic]) {
            setQuestions(data[topic]);
          }
        })
        .catch((error) => console.error('Error loading Qdata:', error));
    }
  }, [topic]);

  const handleSaveChanges = () => {
    localStorage.setItem(`questions_${topic}`, JSON.stringify(questions));
    setShowConfirmation(true);
  };

  const handleBackToTopics = () => {
    navigate('/topics');
  };

  const handleAddQuestion = () => {
    navigate(`/add-question/${topic}`); // Navigate to Add Question page
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="background-wrapper">
      <div className="edit-quiz-container">
        <h1>Edit Quiz: {topic}</h1>

        {showConfirmation ? (
          <div className="confirmation-message">
            <h3>Changes saved successfully!</h3>
            <button onClick={handleBackToTopics} className="back-button">
              Back to Topics
            </button>
          </div>
        ) : (
          <div>
            {questions.length === 0 ? (
              <p>No questions available to edit.</p>
            ) : (
              <div>
                {questions.map((question, index) => (
                  <div key={index} className="question-card">
                    <div>
                      <label>Question:</label>
                      <input
                        type="text"
                        value={question.question}
                        onChange={(e) =>
                          setQuestions((prev) => {
                            const updated = [...prev];
                            updated[index].question = e.target.value;
                            return updated;
                          })
                        }
                      />
                    </div>
                    <div>
                      <label>Options:</label>
                      {question.options.map((option, optionIndex) => (
                        <input
                          key={optionIndex}
                          type="text"
                          value={option}
                          onChange={(e) =>
                            setQuestions((prev) => {
                              const updated = [...prev];
                              updated[index].options[optionIndex] = e.target.value;
                              return updated;
                            })
                          }
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => handleDeleteQuestion(index)}
                      className="delete-button"
                    >
                      Delete Question
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button onClick={handleAddQuestion} className="add-button">
              Add Question
            </button>
            <div className="save-changes">
              <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditQuiz;
