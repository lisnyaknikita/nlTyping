'use client';
import { FC, useContext } from 'react';

import classes from './Field.module.scss';

import clsx from 'clsx';
import { ThemeContext } from '@/providers/ThemeContext';

const Field: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return <div className={clsx(classes.field, !darkMode && 'light')}></div>;
};

export default Field;
