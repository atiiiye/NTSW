import React, { useState, useEffect, useMemo } from "react";

import { Redirect } from "react-router-dom";

//css
 import './../css/Timer.css'

const Timer = () => {
  const [second, setSeconds] = useState(59);
  const [minute, setMinute] = useState(29);

  useEffect(() => {
    const SecTimer =
      second > 0 && setInterval(() => setSeconds(second - 1), 1000);
    const minTimer =
      minute > 0 && setTimeout(() => setMinute(minute - 1), 6000);
    // if (second < 10) {
    //   setSeconds("0" + second);
    // }
    return () => clearInterval(SecTimer);
  }, [second, minute]);

  useMemo(() => {
    second > 0 && setTimeout(() => setSeconds(second - 1), 1000);
    minute > 0 && setTimeout(() => setMinute(minute - 1), 6000);

    if (second > 0) {
      setTimeout(() => setSeconds(second - 1), 1000);
    } else if (minute > 0) {
      setTimeout(() => setMinute(minute - 1), 6000);
    }
  }, []);

  return (
    <div className="timer-container timerDiv">
      <span className="text-time">زمان باقیمانده : </span>
      <span className="timerbox">
        <span className="minute">{minute}</span>
        <span className="seprator">:</span>
        <span className="second">{second}</span>
      </span>
    </div>
  );
};

export default Timer;
