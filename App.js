import React from 'react';
import './App.css';
import CandidateInfo from './CandidateInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EXP-2 IN LAB</h1>
        <CandidateInfo name="SASIDHAR" experience={3} role="Frontend Developer" />
      </header>
    </div>
  );
}

export default App;
