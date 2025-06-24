// import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Timer from './Timer';
import './App.css'

function App() {
  const navigate = useNavigate();

  const handleClick = (study, breakTime) => {
    navigate(`/timer/${study}/${breakTime}`);
  };

  return (
    <div id="app-widget">
      <div className="heading">
        <h1>GOOD <span id="greeting">MORNING</span>!</h1>
        <p>choose a pomodoro setting:</p>
      </div>

      <div className="pomodoro-settings">
        {/* 25/5 split */}
        <button id="options" onClick={() => handleClick(25, 5)}>SHORT STUDY</button>
        {/* 52/17 split */}
        <button id="options" onClick={() => handleClick(52, 17)}>FINISH WORK</button>
        {/* 45/15 split */}
        <button id="options" onClick={() => handleClick(45, 15)}>DEEP FOCUS</button>
      </div>
      
    </div>
  )

}

export default function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/timer/:study/:breakTime" element={<Timer />} />
    </Routes>
  );
}
