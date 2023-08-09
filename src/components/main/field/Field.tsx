'use client';
import { FC, FormEvent, useContext, useEffect, useRef, useState } from 'react';

import classes from './Field.module.scss';

import data from '@/languages/words.json';

import clsx from 'clsx';

import { ThemeContext } from '@/providers/ThemeContext';
import { useAppSelector } from '@/hooks/useAppSelector';

const Field: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [generatedWords, setGeneratedWords] = useState<string>('');
  const { darkMode } = useContext(ThemeContext);

  const selectedLanguage = useAppSelector((state) => state.wordsLanguage.language);

  const fromIndex = Math.round(Math.random() * (957 - 0) + 0);

  useEffect(() => {
    const neededLanguageObject = data.find((language) => language.name === selectedLanguage);
    const words = neededLanguageObject?.words.slice(fromIndex, fromIndex + 40).toString()!;
    setGeneratedWords(words);
  }, [selectedLanguage]);

  const handleTyping = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <div className={clsx(classes.field, !darkMode && 'light')}>
        <div className={classes.wordsBox}>{generatedWords}</div>
      </div>
      <input className={classes.input} style={{ textAlign: 'center', marginLeft: '45%' }} type='text' value={inputValue} onChange={handleTyping} />
    </>
  );
};

export default Field;
