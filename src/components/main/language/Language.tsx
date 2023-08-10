'use client';

import { FC, useContext, useState } from 'react';

import classes from './Language.module.scss';

import LanguagePopUp from './language-popup/LanguagePopUp';

import { ThemeContext } from '@/providers/ThemeContext';
import clsx from 'clsx';

const Language: FC = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={classes.language}>
      <button className={clsx(classes.languageBtn, !darkMode && 'light')} onClick={() => setIsPopUpOpen((prev) => !prev)}>
        Language
      </button>
      <LanguagePopUp isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} />
    </div>
  );
};

export default Language;
