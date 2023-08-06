import React, { useContext, useState } from 'react'
import { MainContext } from './Context'
import { IoSettingsOutline, IoClose } from "react-icons/io5"
import Radio from './Radio'
import Themes from './Themes'

const SidebarRight = () => {
  const {right, handleRight, isChecked, handleSwitch} = useContext(MainContext);

  let amber = 'amber', sky= 'sky'

  return (
    <div className='relative'>
      <aside className={`fixed top-0 z-40 shadow-md dark:shadow-none bg-white dark:bg-brand-black-dark text-brand-black-light dark:text-white h-screen transition-all duration-500 ease-in-out w-80 ${right ? 'right-0' : '-right-80'}`}>
        {/* toggle btn */}
        <button className={`absolute text-2xl top-1/2 -translate-y-1/2 right-full bg-brand-${amber} rounded-tl-lg rounded-bl-lg py-2 px-4`} onClick={handleRight}>
          <IoSettingsOutline className='animate-spin animate-duration-[3000ms] animate-normal text-white dark:text-brand-black-primary' />
        </button>
        {/* colors */}
        <div className='hidden'>
          <span className='bg-brand-sky'></span>
          <span className='bg-brand-red'></span>
          <span className='bg-brand-orange'></span>
          <span className='bg-brand-amber'></span>
          <span className='bg-brand-yellow'></span>
          <span className='bg-brand-lime'></span>
          <span className='bg-brand-green'></span>
          <span className='bg-brand-emerald'></span>
          <span className='bg-brand-teal'></span>
          <span className='bg-brand-cyan'></span>
          <span className='bg-brand-blue'></span>
          <span className='bg-brand-indigo'></span>
          <span className='bg-brand-violet'></span>
          <span className='bg-brand-purple'></span>
          <span className='bg-brand-fuchsia'></span>
          <span className='bg-brand-pink'></span>
          <span className='bg-brand-rose'></span>
        </div>
        
        {/* head */}
        <div className='flex justify-between items-center border-b border-brand-gray dark:border-brand-black-primary p-4 text-brand-black-light dark:text-brand-gray-dark text-2xl'>
          <h2 className='font-bold'>Customize</h2>
          <button className='bg-transparent' onClick={handleRight}>
            <IoClose />
          </button>
        </div>

        <div className='h-screen overflow-y-auto pb-16'>

          {/* dark mode */}
          <div className='flex justify-between items-center border-b border-brand-gray dark:border-brand-black-primary p-4'>
            <span className='text-brand-black-light dark:text-brand-gray-dark capitalize font-bold'>
            Dark Mode
            </span>
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
          </div>

          {/* menu color */}
          <div className='flex justify-between items-center border-b border-brand-gray dark:border-brand-black-primary p-4'>
            <span className='text-brand-black-light dark:text-brand-gray-dark capitalize font-bold'>
            menu
            </span>
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
          </div>

          {/* menu types */}
          <Radio />

          {/* Themes */}
          <Themes />
        </div>
      </aside>
    </div>
  )
}

export default SidebarRight
