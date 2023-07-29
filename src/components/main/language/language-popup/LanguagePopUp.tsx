import { FC, Ref, useContext, useEffect, useRef } from 'react';

import classes from './LanguagePopUp.module.scss';
import { languages } from './languages';
import clsx from 'clsx';
import { ThemeContext } from '@/providers/ThemeContext';

interface ILanguagePopUpProps {
  isPopUpOpen: boolean;
}

const LanguagePopUp: FC<ILanguagePopUpProps> = ({ isPopUpOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={classes.languagePopUp}>
      <ul className={clsx(classes.languageList, isPopUpOpen && 'open')}>
        {languages.map((language) => (
          <li
            className={clsx(classes.languageItem, !darkMode && 'light')}
            key={language.id}
          >
            <button
              type='button'
              className={clsx(classes.languageButton, !darkMode && 'light')}
            >
              {language.language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePopUp;
