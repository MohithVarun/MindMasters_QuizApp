import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Styles/Topic.css';

function Topic() {
  const [searchQuery, setSearchQuery] = useState('');
  const [topics, setTopics] = useState([
    { name: "Biology", image: "" },
    { name: "Sports", image: "" },
    { name: "Politics", image: "https://img.freepik.com/premium-vector/political-talk-show-two-politico-speaking-debate-audience-tv-broadcast-professional-speakers-leader-politics-party-public-discussion-host-studio-vector-illustration-talking-speak-voting_81894-12809.jpg?semt=ais_hybrid" },
    { name: "Indian Art And Culture", image: "https://via.placeholder.com/300?text=Indian+Art+and+Culture" },
    { name: "Food", image: "https://via.placeholder.com/300?text=Food" },
    { name: "Science & Technology", image: "https://via.placeholder.com/300?text=Science+and+Technology" },
    { name: "General Science", image: "https://via.placeholder.com/300?text=General+Science" },
    { name: "Geography", image: "https://via.placeholder.com/300?text=Geography" },
    { name: "History", image: "" },
    { name: "C Language", image: "" },
    { name: "World Politics", image: "" },
    { name: "Python Language", image: "" },
    { name: "Data Structures and Algorithms (DSA)", image: "" },
    { name: "C++ Language", image: "" },
    { name: "General Knowledge", image: "" },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
    setTopics(storedTopics);
  }, []);

  const handleDelete = (name) => {
    const updatedTopics = topics.filter((topic) => topic.name !== name);
    setTopics(updatedTopics);
    localStorage.setItem("topics", JSON.stringify(updatedTopics));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="background-wrapper1">
      <div className="topic-container">
        <h1 className="quiz">Select a Topic for Your Mind Game</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a topic..."
            onChange={handleSearchChange}
            value={searchQuery}
          />
        </div>

        <div className="topics-list">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <img src={topic.image} alt={topic.name} className="topic-image" />
                <Link to={`/quiz/${topic.name}`} className="topic-link">
                  {topic.name}
                </Link>

                {/* Edit Button with Round Skyblue Color */}
                <button
                  className="edit-button"
                  onClick={() => navigate(`/edit-quiz/${topic.name}`)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                    alt="Edit"
                    style={{ width: '20px', height: '20px' }} // Adjust size of icon
                  />
                </button>

                {/* Delete Button */}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(topic.name)}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_qqxGednoqgUslZK1snJv4UXOL0giWm5mg&s"
                    alt="delete"
                    style={{ width: '20px', height: '20px' }} // Adjust size if needed
                  />
                </button>
              </div>
            ))
          ) : (
            <p>No topics found. Please add a topic!</p>
          )}

          <div className="add-topic-button">
            <Link to="/add-topic">
              <button className="plus-button">+</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
