'use client';

import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/tailwind.css';
import {ThemeContext} from './theme';

function MainLayout({children}: {children: React.ReactNode}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkStored = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkStored);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('darkMode', String(newTheme));
  };

  return (
    <html lang="en" className={isDark ? 'dark' : ''}>
      <ThemeContext.Provider value={{isDark, toggleTheme}}>
        <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 transition-colors">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </ThemeContext.Provider>
    </html>
  );
}

export default MainLayout;
