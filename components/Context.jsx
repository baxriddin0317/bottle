'use client'

import { createContext, useEffect, useState } from "react"

export const MainContext = createContext();

export const Provider = ({children}) => {
  const [ left, setLeft ] = useState(true);
  const [ right, setRight ] = useState(false);
  // dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // theme
  const [theme, setTheme] = useState('');
  // menu
  const [menu, setMenu] = useState(false);

  const handleLeft = () => {
    setLeft(prev => !prev);
  }

  const handleRight = () => {
    setRight(prev => !prev);
  }

  // theme
  useEffect(() => {
    const isColor = localStorage.getItem('color') === null;
    
    if(isColor){
      setTheme('sky');
    }else {
      setTheme(localStorage.getItem('color'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('color', theme);
  }, [theme]);


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
    isChecked,
    theme,
    setTheme,
    menu,
    setMenu
  }
  return <MainContext.Provider value={value}>
    {children}
  </MainContext.Provider>
}