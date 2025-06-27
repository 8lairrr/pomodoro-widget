import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Timer.css';
import backIcon from './assets/back.svg';

function Timer() {
    const { study, breakDuration } = useParams();
    const navigate = useNavigate();

    // duration in minutes
    const studyTime = parseInt(study);
    const breakTime = parseInt(breakDuration);

    // durations in seconds
    const studySeconds = studyTime * 60;
    const breakSeconds = breakTime * 60;

    const getInitialState = () => {
        const saved = JSON.parse(localStorage.getItem('pomodoroState'));
        if (saved) {
          const now = Date.now();
          const elapsed = Math.floor((now - saved.startTime) / 1000); // seconds elapsed
          const remaining = saved.duration - elapsed;
          if (remaining > 0) {
            return {
              isStudyTime: saved.isStudyTime,
              timeLeft: remaining,
            };
          }
        }
        // default state
        return {
            isStudyTime: true,
            timeLeft: studySeconds,
        };
    };

    const initialState = getInitialState();

    // tracking current mode --> true = study, false = break
    const [isStudyTime, setIsStudyTime] = useState(initialState.isStudyTime);
    // store time left
    const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);

    // save to localStorage to stop timer resetting when minimized/reloaded
    const saveStateToLocalStorage = (isStudy, duration) => {
        localStorage.setItem(
          'pomodoroState',
          JSON.stringify({
            isStudyTime: isStudy,
            duration: duration,
            startTime: Date.now(),
          })
        );
    };

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
            const nextIsStudy = !isStudyTime;
            const nextDuration = nextIsStudy ? STUDY_SECONDS : BREAK_SECONDS;
            setIsStudyTime(nextIsStudy);
            // reset timer to next mode duration
            setTimeLeft(nextDuration);
            saveStateToLocalStorage(nextIsStudy, nextDuration);
            return;
        }
    
        // setting up a 1 second interval
        const timerId = setInterval(() => {
          // decrease the time left by 1 second
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
    
        // clear the 1 second interval when time updates
        return () => clearInterval(timerId);
    }, [timeLeft, isStudyTime, studySeconds, breakSeconds]); // run again if dependencies change

    // clear localStorage on exit
    const handleExit = () => {
        localStorage.removeItem('pomodoroState');
        navigate('/');
    };

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

            <button onClick={handleExit}>
                <img id="back" src={backIcon} />
            </button>
        
        </div>
    )

}

export default Timer
