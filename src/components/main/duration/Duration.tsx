'use client';

import { FC, useContext, useState } from 'react';

import classes from './Duration.module.scss';

import { durationButtons } from '@/utils/durationButtons';

import clsx from 'clsx';

import { ThemeContext } from '@/providers/ThemeContext';

const Duration: FC = () => {
  const [isActive, setIsActive] = useState(1);

  const { darkMode } = useContext(ThemeContext);

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
              onClick={() => setIsActive(button.id)}
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
