import './Timer.css'

function Timer() {

    return (
        <div id="timer-widget">

            <h1 className="time-display"><span id="timer">00:00</span></h1>

            <div id="time-labels">
                <button id="working">WORKING</button>
                <button id="break" className="inactive-label">BREAK</button>
            </div>
        
        </div>
    )

}

export default Timer
