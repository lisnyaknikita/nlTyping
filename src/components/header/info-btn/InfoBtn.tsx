import { FC } from 'react';

import classes from './InfoBtn.module.scss';

import { FiInfo } from 'react-icons/fi';

const InfoBtn: FC = () => {
  return (
    <button className={classes.infoBtn}>
      <FiInfo />
    </button>
  );
};

export default InfoBtn;
