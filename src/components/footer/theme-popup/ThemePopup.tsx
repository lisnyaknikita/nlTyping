'use client';

import { FC, useContext } from 'react';

import classes from './ThemePopup.module.scss';

import clsx from 'clsx';
import { ThemeContext } from '@/providers/ThemeContext';

interface IThemePopupProps {
  isPopUpOpen: boolean;
}

const ThemePopup: FC<IThemePopupProps> = ({ isPopUpOpen }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleLightTheme = () => {
    darkMode && toggleDarkMode();
  };

  const handleDarkTheme = () => {
    !darkMode && toggleDarkMode();
  };

  return (
    <div
      className={clsx(
        classes.themePopUp,
        isPopUpOpen && 'open',
        !darkMode && 'light'
      )}
    >
      <button
        className={clsx(classes.themePopUpButton, !darkMode && 'light')}
        onClick={handleLightTheme}
      >
        Light
      </button>
      <button
        className={clsx(classes.themePopUpButton, !darkMode && 'light')}
        onClick={handleDarkTheme}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemePopup;
