'use client';

import { FC, useState } from 'react';

import classes from './Language.module.scss';

import LanguagePopUp from './language-popup/LanguagePopUp';

const Language: FC = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

  return (
    <div className={classes.language}>
      <button className={classes.languageBtn}>Language</button>
      <LanguagePopUp isPopUpOpen={isPopUpOpen} />
    </div>
  );
};

export default Language;
