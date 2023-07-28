import { FC, Ref, useEffect, useRef } from 'react';

import classes from './LanguagePopUp.module.scss';
import { languages } from './languages';
import clsx from 'clsx';

interface ILanguagePopUpProps {
  isPopUpOpen: boolean;
}

const LanguagePopUp: FC<ILanguagePopUpProps> = ({ isPopUpOpen }) => {
  return (
    <div className={classes.languagePopUp}>
      <ul className={clsx(classes.languageList, isPopUpOpen && 'open')}>
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
