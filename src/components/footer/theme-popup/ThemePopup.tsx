'use client';

import { FC, useContext } from 'react';

import classes from './ThemePopup.module.scss';

import clsx from 'clsx';
import { ThemeContext } from '@/providers/ThemeContext';

interface IThemePopupProps {
  isPopUpOpen: boolean;
}

const ThemePopup: FC<IThemePopupProps> = ({ isPopUpOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        classes.themePopUp,
        isPopUpOpen && 'open',
        !darkMode && 'light'
      )}
    >
      <button className={clsx(classes.themePopUpButton, !darkMode && 'light')}>
        Light
      </button>
      <button className={clsx(classes.themePopUpButton, !darkMode && 'light')}>
        Dark
      </button>
    </div>
  );
};

export default ThemePopup;
