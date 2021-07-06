import React, { useState, useEffect } from 'react';
import calculateTimeInSeconds from '../../../Helper/TimerHelper';
import Controls from '../Controls/control';
import './main.css';

function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [timeArray, setTimeArray] = useState<Array<number|string>>([]);

    useEffect(() => {
        setTimeArray(calculateTimeInSeconds(timeInSeconds));
    }, [timeInSeconds]);

    return(
        <main className="stopwatch-container">
            <h1 id='stopwatch'>
               <b>STOPWATCH</b> 
            </h1>
            <section className="timer-display">
                <p id="hour">{timeArray[0]}</p>
                <span>:</span>
                <p id="minute">{timeArray[1]}</p>
                <span>:</span>
                <p id="second">{timeArray[2]}</p>
            </section>
            <Controls setTimeInSeconds={setTimeInSeconds} />
        </main>
    );
}

export default Main;
