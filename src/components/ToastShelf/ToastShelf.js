import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  function closeFunction(index) {
    //console.log('index: ' + index);
    const newToasts = [...toasts];
    newToasts.splice(index, 1);
    setToasts(newToasts);
  }
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="notificaton"
    >
      {toasts?.map(({ key, variant, message }, index) => (
        <li key={key} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            closeFunction={() => closeFunction(index)}
            index={toasts.index}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
