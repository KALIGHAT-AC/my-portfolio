import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';
import { useTheme } from '../contexts/ThemeContext';

const Toaster = () => {
  const { isDark } = useTheme();

  return (
    <SonnerToaster
      theme={isDark ? 'dark' : 'light'}
      position="top-right"
      toastOptions={{
        style: {
          background: isDark ? 'rgb(30 41 59)' : 'rgb(255 255 255)',
          border: isDark ? '1px solid rgb(51 65 85)' : '1px solid rgb(226 232 240)',
          color: isDark ? 'rgb(248 250 252)' : 'rgb(15 23 42)',
        },
      }}
    />
  );
};

export default Toaster;