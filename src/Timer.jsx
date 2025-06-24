import { useParams } from 'react-router-dom';
import './Timer.css'

function Timer() {
    const { study, breakTime } = useParams();
    const studyTime = parseInt(study);
    const breakDuration = parseInt(breakTime);

    return (
        <div id="timer-widget">

            <h1 className="time-display"><span id="timer">{study}:00</span></h1>

            <div id="time-labels">
                <button id="working">WORKING</button>
                <button id="break" className="inactive-label">BREAK</button>
            </div>
        
        </div>
    )

}

export default Timer
