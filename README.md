# MindMasters Quiz App

## Description
MindMasters Quiz App is an interactive React-based application that enables users to create, manage, and participate in quizzes across various topics. The application features a user-friendly interface for both quiz creation and participation.

## Features
- Create and manage quiz topics
- Add custom questions with multiple-choice options
- Take quizzes on different topics
- Instant feedback on quiz completion
- Local storage for data persistence
- Responsive design for all devices

## Installation and Setup
1. Clone the repository
```bash
git clone https://github.com/AP22110010529/MindMasters_QuizApp.git
```

2. Navigate to the project directory:
```bash
cd MindMasters_QuizApp
 ```

3. Install dependencies:
```bash
npm install
 ```

4. Start the development server:
```bash
npm start
 ```

The application will automatically open in your default browser at http://localhost:3000

## Usage Guide
### Managing Topics
1. Launch the application
2. Navigate to the Topics page
3. Click "Add New Topic" to create a new quiz category
4. Enter the topic name and save
### Adding Questions
1. Select a topic from the topics list
2. Click "Add Question"
3. Fill in:
   - Question text
   - Four answer options
   - Correct answer
4. Click "Save Question" to add it to the topic
### Taking a Quiz
1. Select a topic from the main page
2. Click "Start Quiz"
3. Answer each question by selecting one of the options
4. View your final score after completing the quiz
### 📂 Project Structure

```plaintext
MindMasters_QuizApp/
├── public/
│   ├── Qdata.json
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── Styles/
│   │   ├── AddQuestion.css
│   │   ├── AddTopics.css
│   │   ├── EditQuiz.css
│   │   ├── Home.css
│   │   ├── Quiz.css
│   │   └── Topic.css
│   ├── AddQuestion.jsx
│   ├── AddTopic.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── EditQuiz.jsx
│   ├── Home.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── Quiz.jsx
│   ├── Result.jsx
│   ├── style.css
│   └── Topic.jsx
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
## Technology Stack
- React.js - Frontend framework
- React Router DOM - Navigation
- CSS3 - Styling
- Local Storage - Data persistence
## Development
To modify this project:

1. Fork the repository
2. Create a new branch ( git checkout -b feature/YourFeature )
3. Make changes
4. Commit ( git commit -m 'Add YourFeature' )
5. Push to branch ( git push origin feature/YourFeature )
6. Create Pull Reques

## Future Enhancements
- User authentication system
- Score history tracking
- Timer for quizzes
- Different question types
- Share quiz results
- Leaderboard system

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Contact
For inquiries or collaboration opportunities, reach out via email at **mohithvarunr@gmail.com** or visit [GitHub](https://github.com/MohithVarun)
.
