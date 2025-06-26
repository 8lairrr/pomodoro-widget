import { useParams, useNavigate } from 'react-router-dom';
import './Timer.css'
import backIcon from './assets/back.svg';

function Timer() {
    const { study, breakTime } = useParams();
    const navigate = useNavigate();
    const studyTime = parseInt(study);
    const breakDuration = parseInt(breakTime);

    return (
        <div id="timer-widget">

            <h1 className="time-display"><span id="timer">{study}:00</span></h1>

            <div id="time-labels">
                <button id="working">WORKING</button>
                <button id="break" className="inactive-label">BREAK</button>
            </div>

            <button onClick={() => navigate('/')}>
                <img id="back" src={backIcon} />
            </button>
        
        </div>
    )

}

export default Timer
