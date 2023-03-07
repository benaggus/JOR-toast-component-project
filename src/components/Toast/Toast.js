import React from 'react';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, closeFunction }) {
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={closeFunction}
        aria-label="dismiss message"
        aria-live="off"
      >
        <X />
      </button>
    </div>
  );
}

export default Toast;
