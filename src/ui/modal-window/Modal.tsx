'use client';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';

import classes from './Modal.module.scss';

interface IModalProps {
  title: string;
  children: PropsWithChildren<ReactNode>;
}

const Modal: FC<IModalProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.modal}>
      <div className={classes.modalBody}>
        <h3 className={classes.modalTitle}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
