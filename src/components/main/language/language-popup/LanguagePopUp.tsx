import { FC, useContext, useEffect, useRef } from 'react';

import classes from './LanguagePopUp.module.scss';
import { languages } from './languages';
import clsx from 'clsx';
import { ThemeContext } from '@/providers/ThemeContext';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { languageType, selectLanguage } from '@/store/selectedLanguageSlice';

interface ILanguagePopUpProps {
  isPopUpOpen: boolean;
  setIsPopUpOpen: (status: boolean) => void;
}

const LanguagePopUp: FC<ILanguagePopUpProps> = ({ isPopUpOpen, setIsPopUpOpen }) => {
  const dispatch = useAppDispatch();

  const { darkMode } = useContext(ThemeContext);

  const handleClick = (language: languageType) => {
    dispatch(selectLanguage(language));
    setIsPopUpOpen(false);
  };

  return (
    <div className={classes.languagePopUp}>
      <ul className={clsx(classes.languageList, isPopUpOpen && 'open')}>
        {languages.map((language) => (
          <li className={clsx(classes.languageItem, !darkMode && 'light')} key={language.id}>
            <button type='button' className={clsx(classes.languageButton, !darkMode && 'light')} onClick={() => handleClick(language.language)}>
              {language.language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePopUp;
