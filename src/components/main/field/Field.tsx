'use client';
import { FC, useContext } from 'react';

import classes from './Field.module.scss';

import { faker } from '@faker-js/faker';

import clsx from 'clsx';

import { ThemeContext } from '@/providers/ThemeContext';

const Field: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const englishWords = faker.random.words(30);
  // const ukrainianWords = faker.random.words(30);
  // const russianWords = faker.random.words(30);
  //TODO: add ukrainian and russian languages

  return (
    <div className={clsx(classes.field, !darkMode && 'light')}>
      <div className={classes.wordsBox}>{englishWords}</div>
    </div>
  );
};

export default Field;
