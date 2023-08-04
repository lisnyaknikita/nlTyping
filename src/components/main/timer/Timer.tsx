'use client';
import { FC, useEffect, useState, useRef } from 'react';

import classes from './Timer.module.scss';

const Timer: FC = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSecond) => {
        if (prevSecond === 0) {
          clearInterval(interval);
        }
        return prevSecond > 0 ? prevSecond - 1 : prevSecond;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className={classes.timer}>{seconds}s</div>;
};

export default Timer;
