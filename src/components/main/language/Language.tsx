'use client';

import { FC, useState } from 'react';

import classes from './Language.module.scss';

import LanguagePopUp from './language-popup/LanguagePopUp';

const Language: FC = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <div className={classes.language}>
      <button
        className={classes.languageBtn}
        onClick={() => setIsPopUpOpen((prev) => !prev)}
      >
        Language
      </button>
      <LanguagePopUp
        isPopUpOpen={isPopUpOpen}
        // setIsPopUpOpen={setIsPopUpOpen}
      />
    </div>
  );
};

export default Language;
