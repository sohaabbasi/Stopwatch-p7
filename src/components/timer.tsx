import React from 'react';
import './timer.css';

function Timer() {

  const [mins, setMins] = React.useState("00");
  let [secs, setSecs] = React.useState("00");

  let [start, setStart] = React.useState(false);
  let [reset, setReset] = React.useState(false);

  function convertTo2Dec(time: string): string {
    return (parseInt(time)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  }



  React.useEffect(() => {


    if (reset) {

      setReset(false);
      setStart(false);
      setMins("00");
      setSecs("00");
    }



    if (start) {


      const interval = setInterval(() => {

        if (parseInt(secs) < 59) {
          setSecs(convertTo2Dec((parseInt(secs) + 1).toString()));
        }
        else {
          setSecs("00");
          setMins(convertTo2Dec((parseInt(mins) + 1).toString()))

        }


      }, 1000);


      return () => clearInterval(interval);
    }

  }, [secs, start, reset, mins]);



  return (
    <div id="wrapper">
      <div id="displayContainer" data-testid="timerDisplay">
        {mins} : {secs}
      </div>
      <div id="buttonsContainer" >
        <button className="buttons" onClick={() => { setStart(true) }} >Start</button>
        <button className="buttons" onClick={() => { setStart(false) }}>Stop</button>
        <button className="buttons" onClick={() => { setReset(true) }} >Reset</button>
      </div>
    </div>
  );
}

export default Timer;