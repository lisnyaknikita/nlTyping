'use client';

import { FC, useContext, useState } from 'react';

import classes from './Duration.module.scss';

import { durationButtons } from '@/utils/durationButtons';

import clsx from 'clsx';

import { ThemeContext } from '@/providers/ThemeContext';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { resetDuration } from '@/store/timerDurationSlice';

const Duration: FC = () => {
  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(1);

  const { darkMode } = useContext(ThemeContext);

  const handleClick = (buttonId: number, buttonDuration: number) => {
    setIsActive(buttonId);
    dispatch(resetDuration(buttonDuration));
    //FIXME:after click ui doesn't rerender
  };

  return (
    <div className={classes.duration}>
      <div className={clsx(classes.durationBody, !darkMode && 'light')}>
        <p className={clsx(classes.durationText, !darkMode && 'light')}>
          Duration:
        </p>
        <div className={classes.durationButtons}>
          {durationButtons.map((button) => (
            <button
              className={clsx(
                classes.durationBtn,
                isActive === button.id && 'active',
                !darkMode && 'light'
              )}
              key={button.id}
              onClick={() => handleClick(button.id, button.duration)}
            >
              {button.duration}s
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Duration;
