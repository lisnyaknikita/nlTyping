import { FC } from 'react';

import classes from './ThemePopup.module.scss';

import clsx from 'clsx';

interface IThemePopupProps {
  isPopUpOpen: boolean;
}

const ThemePopup: FC<IThemePopupProps> = ({ isPopUpOpen }) => {
  return (
    <div className={clsx(classes.themePopUp, isPopUpOpen && 'open')}>
      <button className={classes.themePopUpButton}>Light</button>
      <button className={classes.themePopUpButton}>Dark</button>
    </div>
  );
};

export default ThemePopup;
