import { FC } from 'react';

import classes from './ThemePopup.module.scss';

const ThemePopup: FC = () => {
  return (
    <div className={classes.themePopUp}>
      <button className={classes.themePopUpButton}>Light</button>
      <button className={classes.themePopUpButton}>Dark</button>
    </div>
  );
};

export default ThemePopup;
