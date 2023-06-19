import { FC } from 'react';

import classes from './UserBtn.module.scss';

import { FiUser } from 'react-icons/fi';

const UserBtn: FC = () => {
  return (
    <button className={classes.userBtn}>
      <FiUser />
    </button>
  );
};

export default UserBtn;
