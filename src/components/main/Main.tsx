import { FC } from 'react';

import classes from './Main.module.scss';

import Duration from './duration/Duration';
import Language from './language/Language';
import Field from './field/Field';
import Timer from './timer/Timer';

const Main: FC = () => {
  return (
    <main>
      <Duration />
      <Language />
      <Timer />
      <Field />
    </main>
  );
};

export default Main;
