import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Timer.css';
import backIcon from './assets/back.svg';

function Timer() {
    const { study, breakTime } = useParams();
    const navigate = useNavigate();

    // tracking current mode --> true = study, false = break
    const [isStudyTime, setIsStudyTime] = useState(true);

    // string to numbers
    const studyTime = parseInt(study);
    const breakDuration = parseInt(breakTime);

    // store time left
    const [timeLeft, setTimeLeft] = useState(studyTime * 60);

    // convert timeLeft to MM:SS format
    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        // if seconds is single digit then minute is 0
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        // only run the timer if time is remaining
        if (timeLeft <= 0) {
            const nextMode = !isStudyTime;
            setIsStudyTime(nextMode);

            // reset timer to next mode duration
            setTimeLeft(nextMode ? studyTime * 60 : breakDuration * 60);
            return;
        }
    
        // setting up a 1 second interval
        const timerId = setInterval(() => {
          // decrease the time left by 1 second
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
    
        // clear the 1 second interval when time updates
        return () => clearInterval(timerId);
    }, [timeLeft, isStudyTime, studyTime, breakDuration]); // run again if dependencies change

    return (
        <div id="timer-widget">

            <h1 className="time-display"><span id="timer">{formatTime(timeLeft)}</span></h1>

            <div id="time-labels">
                <button 
                    id="working"
                    className={isStudyTime ? 'active-label' : 'inactive-label'}>

                    WORKING

                </button>
                <button 
                    id="break"
                    className={!isStudyTime ? 'active-label' : 'inactive-label'}>
                    
                    BREAK
                    
                </button>
            </div>

            <button onClick={() => navigate('/')}>
                <img id="back" src={backIcon} />
            </button>
        
        </div>
    )

}

export default Timer
