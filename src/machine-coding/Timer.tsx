import React, {useState,useRef, useEffect} from "react";
import "./machine-coding.scss";

const Timer = () => {

    const [time, setTime] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);
    
    const startTimer = () => {
        if(intervalRef.current !== null) return;
        intervalRef.current = setInterval(()=> {
             setTime(prevTime => prevTime + 1)
        },1000);  
    }

    const stopTimer = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    }

    useEffect(()=> {
        return () => {
            stopTimer();
        }
    },[])

    return (
        <React.Fragment>
            <input type="button" value="START" className="btn-timer" onClick={startTimer}></input>
            <input type="button" value="STOP" className="btn-timer" onClick={stopTimer}></input>
            <input type="button" value="RESET" className="btn-timer" onClick={resetTimer}></input>
            <div>
                Timer : {time}
            </div>
        </React.Fragment>
    )
}

export default Timer;

//Future TODOs:

/*
Implement basic timer with setInterval
Add pause/resume functionality
Add cleanup to prevent memory leaks
Test what happens when component unmounts
Test what happens when browser tab loses focus
Handle edge cases (negative time, very large time) 
*/

/* Notes:
1. useRef is used here because it doesn't cause unnecessary re-renders 
2. Cleanup is done during unmount
*/