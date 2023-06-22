import { FC } from 'react';

import classes from './Language.module.scss';

const Language: FC = () => {
  return (
    <div className={classes.language}>
      <button className={classes.languageBtn}>Language</button>
    </div>
  );
};

export default Language;
