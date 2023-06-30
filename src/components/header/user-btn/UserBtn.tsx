'use client';

import { FC } from 'react';

import classes from './UserBtn.module.scss';

import { FiUser } from 'react-icons/fi';

import Link from 'next/link';

import { Tooltip } from 'antd';

const UserBtn: FC = () => {
  return (
    <Tooltip placement='top' title='User info' mouseEnterDelay={0.2}>
      <Link href='/user' className={classes.userBtn}>
        <FiUser />
      </Link>
    </Tooltip>
  );
};

export default UserBtn;
