'use client';

import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';

import classes from './InfoBtn.module.scss';

import { FiInfo } from 'react-icons/fi';

import clsx from 'clsx';
import { Tooltip } from 'antd';

const InfoBtn: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const insideRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      insideRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      !insideRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Tooltip placement='top' title='Info' mouseEnterDelay={0.2}>
        <button
          ref={dropdownRef}
          type='button'
          className={classes.infoBtn}
          onClick={handleClick}
        >
          <FiInfo />
        </button>
      </Tooltip>

      <div
        className={clsx(classes.dropdown, isDropdownOpen && 'open')}
        ref={insideRef}
      >
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
