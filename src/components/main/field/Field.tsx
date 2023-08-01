'use client';
import { FC, useContext } from 'react';

import classes from './Field.module.scss';

import { faker } from '@faker-js/faker';

import clsx from 'clsx';

import { ThemeContext } from '@/providers/ThemeContext';

const Field: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const words = faker.random.words(30);

  return (
    <div className={clsx(classes.field, !darkMode && 'light')}>
      <div className={classes.wordsBox}>{words}</div>
    </div>
  );
};

export default Field;
