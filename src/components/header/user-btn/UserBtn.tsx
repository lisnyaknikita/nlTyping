'use client';

import { FC, useContext } from 'react';

import classes from './UserBtn.module.scss';

import { FiUser } from 'react-icons/fi';

import Link from 'next/link';

import { Tooltip } from 'antd';

import { ThemeContext } from '@/providers/ThemeContext';
import clsx from 'clsx';

const UserBtn: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Tooltip placement='top' title='User info' mouseEnterDelay={0.2}>
      <Link
        href='/user'
        className={clsx(classes.userBtn, !darkMode && 'light')}
      >
        <FiUser />
      </Link>
    </Tooltip>
  );
};

export default UserBtn;
