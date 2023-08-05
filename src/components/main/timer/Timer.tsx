'use client';
import { FC, useEffect, useState, useRef } from 'react';

import classes from './Timer.module.scss';
import { useAppSelector } from '@/hooks/useAppSelector';

const Timer: FC = () => {
  const duration = useAppSelector((state) => state.timerDuration.seconds);

  const [seconds, setSeconds] = useState(duration);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSeconds(duration);
  }, [duration]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prevSecond) => {
        if (prevSecond <= 1) {
          clearInterval(intervalRef.current!);
        }
        return prevSecond > 0 ? prevSecond - 1 : prevSecond;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [seconds]);

  return <div className={classes.timer}>{seconds}s</div>;
};

export default Timer;
