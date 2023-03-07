import React from 'react';

export default function useHandleKeyDown(keyName, action) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === keyName) {
        action();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyName, action]);
}
