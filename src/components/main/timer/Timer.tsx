'use client';
import { FC, useEffect, useState, useRef } from 'react';

import classes from './Timer.module.scss';

const Timer: FC = () => {
  const [seconds, setSeconds] = useState(5);

  let typingTimer: NodeJS.Timeout;

  useEffect(() => {
    typingTimer = setInterval(() => {
      if (seconds === 0) {
        clearInterval(typingTimer);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(typingTimer);
  }, []);

  return <div className={classes.timer}>{seconds}s</div>;
};

export default Timer;
