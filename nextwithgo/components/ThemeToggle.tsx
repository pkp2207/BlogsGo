// components/ThemeToggle.tsx

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newDarkMode = !prev;
      localStorage.setItem('dark-mode', newDarkMode.toString());
      document.documentElement.classList.toggle('dark', newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded-md">
      {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
