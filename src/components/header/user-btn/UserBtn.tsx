'use client';

import { FC, useContext } from 'react';

import classes from './UserBtn.module.scss';

import { FiUser } from 'react-icons/fi';

import Link from 'next/link';

import { ThemeContext } from '@/providers/ThemeContext';
import clsx from 'clsx';

const UserBtn: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Link
      title='User info'
      href='/user'
      className={clsx(classes.userBtn, !darkMode && 'light')}
    >
      <FiUser />
    </Link>
  );
};

export default UserBtn;
