// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div id="app-widget">
      <div className="heading">
        <h1>GOOD <span id="greeting">MORNING</span>!</h1>
        <p>choose a pomodoro setting:</p>
      </div>

      <div className="pomodoro-settings">
        {/* 25/5 split */}
        <button id="options">SHORT STUDY</button>
        {/* 52/17 split */}
        <button id="options">FINISH WORK</button>
        {/* 45/15 split */}
        <button id="options">DEEP FOCUS</button>
      </div>
      
    </div>
  )

}

export default App
