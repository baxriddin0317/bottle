'use client'

import { createContext, useEffect, useState } from "react"

export const MainContext = createContext();

export const Provider = ({children}) => {
  const [ left, setLeft ] = useState(true);
  const [ right, setRight ] = useState(false);
  // dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleLeft = () => {
    setLeft(prev => !prev);
  }

  const handleRight = () => {
    setRight(prev => !prev);
  }

  // dark mode

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    setIsChecked(darkMode)
  }, [darkMode]);

  const handleSwitch = () => {
    setIsChecked((prevState) => !prevState)
    setDarkMode(prev => !prev)
  }

  const value= {
    left,
    handleLeft,
    right,
    handleRight,
    handleSwitch,
    isChecked
  }
  return <MainContext.Provider value={value}>
    {children}
  </MainContext.Provider>
}