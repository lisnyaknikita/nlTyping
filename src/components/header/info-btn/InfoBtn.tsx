'use client';

import { FC, MouseEventHandler, useState } from 'react';

import classes from './InfoBtn.module.scss';

import { FiInfo } from 'react-icons/fi';

import clsx from 'clsx';

const InfoBtn: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <button type='button' className={classes.infoBtn} onClick={handleClick}>
        <FiInfo />
      </button>
      <div className={clsx(classes.dropdown, isDropdownOpen && 'open')}>
        <p>
          GitHub:
          <a href='https://github.com/lisnyaknikita/nlTyping' target='_blank'>
            https://github.com/lisnyaknikita/nlTyping
          </a>
        </p>
      </div>
    </>
  );
};

export default InfoBtn;
