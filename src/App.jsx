import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div id="widget">
      <div class="heading">
        <h1>GOOD <span id="greeting">MORNING</span>!</h1>
        <p>choose a pomodoro setting:</p>
      </div>

      <div class="pomodoro-settings">
        <button id="options">SHORT STUDY</button>
        <button id="options">FINISH WORK</button>
        <button id="options">DEEP FOCUS</button>
      </div>
      
    </div>
  )

}

export default App
