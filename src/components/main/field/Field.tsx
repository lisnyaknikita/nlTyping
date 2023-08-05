'use client';
import { FC, FormEvent, useContext, useEffect, useRef, useState } from 'react';

import classes from './Field.module.scss';

import data from '@/languages/english.json';

import clsx from 'clsx';

import { ThemeContext } from '@/providers/ThemeContext';

const Field: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [englishWords, setEnglishWords] = useState<string>('');

  const { darkMode } = useContext(ThemeContext);

  const iteratorRef = useRef(0);

  const fromIndex = Math.round(Math.random() * (957 - 0) + 0);

  useEffect(() => {
    const english = data.words.slice(fromIndex, fromIndex + 40).toString();
    setEnglishWords(english);
  }, []);

  const handleTyping = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);

    const generatedWords = englishWords;

    console.log(
      e.currentTarget.value === generatedWords.charAt(iteratorRef.current)
    );
    iteratorRef.current++;
    console.log(iteratorRef.current);
  };

  return (
    <>
      <div className={clsx(classes.field, !darkMode && 'light')}>
        <div className={classes.wordsBox}>{englishWords}</div>
      </div>
      <input
        className={classes.input}
        style={{ textAlign: 'center', marginLeft: '45%' }}
        type='text'
        value={inputValue}
        onChange={handleTyping}
      />
    </>
  );
};

export default Field;
