import React, { useState , useEffect } from 'react'

const Timer = () => {
 const [counter, setCounter] = React.useState(60);

//  setInterval(() => setCounter(counter - 1), 1000);

  // useEffect(() => {
  //       const timer =
  //         counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //       return () => clearInterval(timer);
  // }, [counter]);

  // useEffect(() => {
  //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  // }, []);

    return (
      <div className="timer-container timerDiv">
        <span className="text-time">زمان باقیمانده : </span>
        <span className="timerbox">
          <span className="minute">{counter}</span>
          <span className="seprator">:</span>
          <span className="second">{counter}</span>
        </span>
      </div>
    );
}
 
export default Timer;