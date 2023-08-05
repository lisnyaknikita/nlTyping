'use client';

import { FC, useContext } from 'react';

import classes from './ThemePopup.module.scss';

import clsx from 'clsx';
import { ThemeContext } from '@/providers/ThemeContext';

interface IThemePopupProps {
  isPopUpOpen: boolean;
  setIsPopUpOpen: (status: boolean) => void;
}

const ThemePopup: FC<IThemePopupProps> = ({ isPopUpOpen, setIsPopUpOpen }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleLightTheme = () => {
    if (darkMode) {
      toggleDarkMode();
      setIsPopUpOpen(false);
    } else {
      setIsPopUpOpen(false);
    }
  };

  const handleDarkTheme = () => {
    if (!darkMode) {
      toggleDarkMode();
      setIsPopUpOpen(false);
    } else {
      setIsPopUpOpen(false);
    }
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
