import { FC } from 'react';

import classes from './LanguagePopUp.module.scss';
import { languages } from './languages';
import clsx from 'clsx';

interface ILanguagePopUpProps {
  isPopUpOpen: boolean;
}

const LanguagePopUp: FC<ILanguagePopUpProps> = ({ isPopUpOpen }) => {
  return (
    <div className={clsx(classes.languagePopUp, isPopUpOpen && 'open')}>
      <ul className={classes.languageList}>
        {languages.map((language) => (
          <li className={classes.languageItem} key={language.id}>
            <button type='button' className={classes.languageButton}>
              {language.language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePopUp;
