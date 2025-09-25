
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DateNightIdeas = () => {
  const [idea, setIdea] = useState('');

  const getNewIdea = async () => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity?type=recreational&participants=2');
      setIdea(response.data.activity);
    } catch (error) {
      console.error('Error fetching date night idea:', error);
    }
  };

  useEffect(() => {
    getNewIdea();
  }, []);

  return (
    <div className="card">
      <h4>Date Night Idea</h4>
      <p>{idea}</p>
      <button onClick={getNewIdea} className="button-primary">Get New Idea</button>
    </div>
  );
};

const CouplesQuiz = () => {
  const questions = [
    { question: 'What is your partner\'s favorite color?', answer: '' },
    { question: 'What is your partner\'s favorite food?', answer: '' },
    { question: 'What is your partner\'s dream vacation?', answer: '' },
    { question: 'What is your partner\'s biggest fear?', answer: '' },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="card">
      <h4>Couple's Quiz</h4>
      <p>{questions[currentQuestion].question}</p>
      <input type="text" placeholder="Your answer" style={{padding:8,flex:1, borderRadius: 'var(--border-radius)', border: '1px solid #ccc', width: 'calc(100% - 18px)'}} />
      <button onClick={() => setCurrentQuestion((currentQuestion + 1) % questions.length)} className="button-primary" style={{marginTop: 8}}>Next Question</button>
    </div>
  );
};


const Activities = () => {
  const [activeTab, setActiveTab] = useState('dateNight');

  return (
    <div className="card">
      <div style={{ display: 'flex', gap: 16, borderBottom: '1px solid #eee', paddingBottom: 16, marginBottom: 16 }}>
        <button onClick={() => setActiveTab('dateNight')} style={{ background: activeTab === 'dateNight' ? 'var(--primary-color)' : 'transparent', color: activeTab === 'dateNight' ? '#fff' : 'var(--text-color)' }}>Date Night Ideas</button>
        <button onClick={() => setActiveTab('quiz')} style={{ background: activeTab === 'quiz' ? 'var(--primary-color)' : 'transparent', color: activeTab === 'quiz' ? '#fff' : 'var(--text-color)' }}>Couple's Quiz</button>
      </div>
      <div>
        {activeTab === 'dateNight' && <DateNightIdeas />}
        {activeTab === 'quiz' && <CouplesQuiz />}
      </div>
    </div>
  );
};

export default Activities;
