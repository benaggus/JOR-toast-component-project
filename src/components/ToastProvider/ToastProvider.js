import React from 'react';
import useHandleKeyDown from '../../hooks/KeyboardHooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const newToasts = [...toasts];
    newToasts.push({
      key: crypto.randomUUID(),
      variant: variant,
      message: message,
    });
    setToasts(newToasts);
  }

  const clearToasts = () => setToasts([]);

  useHandleKeyDown('Escape', clearToasts);

  // React.useEffect(() => {
  //   function handleKeyDown(event) {
  //     if (event.code === 'Escape') {
  //       setToasts([]);
  //     }
  //   }

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [setToasts]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, setToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
