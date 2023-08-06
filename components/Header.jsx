'use client'

import React, {useContext, useEffect, useState} from "react";
import {RxHamburgerMenu} from "react-icons/rx"
import {TfiFullscreen} from "react-icons/tfi"
import { AiOutlineFullscreenExit, AiOutlinePoweroff } from "react-icons/ai"
import { IoPersonCircleOutline, IoKeyOutline } from "react-icons/io5"
import { MainContext } from "./Context";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css'

const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const {handleLeft, isChecked, handleSwitch, theme, darkMode} = useContext(MainContext)

  const requestFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullScreen(false);
  };

  const handleClick = () => {
    if (!isFullScreen) {
      requestFullScreen();
    } else {
      exitFullScreen();
    }
  };

  return (
    <header className="fixed shadow-md dark:shadow-none bg-white dark:bg-brand-black-dark left-0 top-0 items-center justify-between z-30 flex h-20 w-full px-10">
      {/* header left */}
      <div className="flex items-center gap-2">
        <button className="bg-transparent" onClick={handleLeft}>
          <RxHamburgerMenu className="text-2xl dark:text-brand-gray-dark" />
        </button>
        <span className={`text-2xl font-bold uppercase text-brand-black-light dark:text-brand-gray-dark`}>
          PRIORITY4
        </span>
      </div>

      {/* header right */}
      <div className="flex items-center gap-4">
        <Tippy 
          content='Toggle Dark Mode'
          className='bg-white !text-sm'
          interactive={true}
          theme={!darkMode && 'light'} 
          placement="bottom"
        >
          <label className="relative inline-block w-10 h-5 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleSwitch}
              className="hidden"
            />
            <span className={`absolute left-0 top-0 w-10 h-6 rounded-full bg-transparent border ${isChecked ? `border-brand-${theme}` : 'border-gray-300' } `} />
            <span
              className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                isChecked ? `bg-brand-${theme} transform translate-x-full` : 'bg-gray-300'
              }`}
            />
          </label>
        </Tippy>

        <Tippy 
          content='Fullscreen'
          className='bg-white !text-sm'
          interactive={true}
          theme={!darkMode && 'light'} 
          placement="bottom"
        >
          <button onClick={handleClick} className="text-gray-600 text-2xl pt-1 bg-transparent dark:text-brand-gray-dark">
            {!isFullScreen ? <TfiFullscreen /> : <AiOutlineFullscreenExit />}
          </button>
        </Tippy>
        {/* profile */}
        <Tippy 
          content={<Tooltip />}
          className='bg-white !text-sm'
          interactive={true}
          theme={!darkMode && 'light'} 
          placement="bottom"
        >
          <div className="w-12 h-12 border-2 border-black dark:border-brand-gray-dark bg-gray-200 dark:bg-brand-black-primary rounded-full cursor-pointer">
          </div>
        </Tippy>
      </div>
    </header>
  );
};

const Tooltip = () => {
  const {theme} = useContext(MainContext);

  return (
    <div className='bg-white w-52 dark:bg-[#333] text-brand-black-light dark:to-brand-gray-dark border-none capitalize'>
      <div className='p-5 border-b border-brand-gray dark:border-brand-black-primary'>
        <h3 className='font-bold text-xl'>User:</h3>
      </div>
      <div className='flex flex-col gap-2 p-5 border-b border-brand-gray dark:border-brand-black-primary'>
        <div className={`flex items-center gap-2 cursor-pointer hover:text-brand-${theme}`}>
          <span className='text-2xl'>
            <IoPersonCircleOutline />
          </span>
          <span className='mt-0.5'>
            view profile
          </span>
        </div>
        <div className={`flex items-center gap-2 cursor-pointer hover:text-brand-${theme}`}>
          <span className='text-2xl'>
            <IoKeyOutline />
          </span>
          <span className='mt-0.5'>
            change password
          </span>
        </div>
      </div>
      <div className={`flex items-center gap-2 p-5 cursor-pointer hover:text-brand-${theme}`}>
        <span className='text-2xl'>
        <AiOutlinePoweroff />
        </span>
        <span className='mt-0.5'>
          Log  out
        </span>
      </div>
    </div>
  )
}

export default Header;
