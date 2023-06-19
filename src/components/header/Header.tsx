import { FC } from 'react';

import classes from './Header.module.scss';

import Logo from './logo/Logo';
import InfoBtn from './info-btn/InfoBtn';
import UserBtn from './user-btn/UserBtn';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <div className={classes.headerInner}>
          <Logo />
          <div className={classes.headerBtns}>
            <InfoBtn />
            <UserBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
