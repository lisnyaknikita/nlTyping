'use client';

import { FC, useState } from 'react';

import classes from './Duration.module.scss';

import { durationButtons } from '@/utils/durationButtons';

import clsx from 'clsx';

const Duration: FC = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className={classes.duration}>
      <div className={classes.durationBody}>
        <p className={classes.durationText}>Duration:</p>
        <div className={classes.durationButtons}>
          {durationButtons.map((button) => (
            <button
              className={clsx(
                classes.durationBtn,
                isActive === button.id && 'active'
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
