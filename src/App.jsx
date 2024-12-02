import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Quiz from './Quiz.jsx';
import Result from './Result.jsx';
import Topic from './Topic.jsx';
import AddTopic from './AddTopic.jsx';
import EditQuiz from './EditQuiz.jsx'; // Import EditQuiz component
import AddQuestion from './AddQuestion.jsx'; // Import AddQuestion component

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Topic selection page */}
        <Route path="/topics" element={<Topic />} />

        {/* Quiz page route, with dynamic topic */}
        <Route path="/quiz/:topic" element={<Quiz />} />

        {/* Add Topic page */}
        <Route path="/add-topic" element={<AddTopic />} />

        {/* Edit Quiz page, with dynamic topic */}
        <Route path="/edit-quiz/:topic" element={<EditQuiz />} />

        {/* Add Question page, with dynamic topic */}
        <Route path="/add-question/:topic" element={<AddQuestion />} />

        {/* Optionally, you can add a Result page route */}
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
