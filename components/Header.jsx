'use client'

import React, {useContext, useEffect, useState} from "react";
import {RxHamburgerMenu} from "react-icons/rx"
import {TfiFullscreen} from "react-icons/tfi"
import {AiOutlineFullscreenExit} from "react-icons/ai"
import { MainContext } from "./Context";

const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const {handleLeft, isChecked, handleSwitch} = useContext(MainContext)

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
        <span className="text-2xl font-bold uppercase text-brand-black-light dark:text-brand-gray-dark">
          PRIORITY4
        </span>
      </div>

      {/* header right */}
      <div className="flex items-center gap-4">
        <label className="relative inline-block w-10 h-5 cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleSwitch}
            className="hidden"
          />
          <span className={`${isChecked ? 'border-indigo-600' : 'border-gray-300' } slider absolute left-0 top-0 w-10 h-6 rounded-full bg-transparent border`} />
          <span
            className={`toggle-dot absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
              isChecked ? 'bg-indigo-600 transform translate-x-full' : 'bg-gray-300'
            }`}
          />
        </label>

        <button onClick={handleClick} className="text-gray-600 text-2xl pt-1 bg-transparent dark:text-brand-gray-dark">
          {!isFullScreen ? <TfiFullscreen /> : <AiOutlineFullscreenExit />}
        </button>

        {/* profile */}
        <div className="w-12 h-12 border-2 border-black dark:border-brand-gray-dark bg-gray-200 dark:bg-brand-black-primary rounded-full cursor-pointer">

        </div>
      </div>
    </header>
  );
};

export default Header;
