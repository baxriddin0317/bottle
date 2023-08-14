import React, { useContext } from 'react'
import {menuItems} from "@/lib/sidebar"
import { MainContext } from './Context'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css'
import { CiLaptop } from 'react-icons/ci';

const SidebarLeft = () => {
  const {left, theme, menu, darkMode} = useContext(MainContext);

  return (
    <aside className={`fixed z-40 top-20 shadow-md dark:shadow-none h-screen !-left-full md:!left-0 transition-all duration-1000 ease ${menu ? `bg-brand-${theme}` : 'bg-white dark:bg-brand-black-dark text-brand-black-light dark:text-white'} ${left ? '!left-0' : '-left-full'}`}>
      <div className='flex flex-col w-full h-screen overflow-y-auto overflow-x-visible pb-10'>
        <div className={`relative flex flex-col items-center justify-center w-32 py-6 px-5 border-b border-brand-gray dark:border-brand-black-primary cursor-pointer dark:text-brand-gray-dark ${menu ? 'text-white dark:!text-brand-black-primary' : `hover:text-brand-${theme} dark:hover:text-brand-${theme}`}`}>
          <span className={`text-4xl`}>
            <CiLaptop />
          </span>
          <span className='text-sm capitalize mt-2'>dashboard</span>
        </div>
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <Tippy  
              content={item.data ? <Tooltip data={item.data} /> : '' }
              className='bg-white'
              appendTo="parent"
              interactive={true}
              theme={!darkMode && 'light'} 
              placement="left"
            >
              <div className={`relative flex flex-col items-center justify-center w-32 py-6 px-5 border-b border-brand-gray dark:border-brand-black-primary cursor-pointer ${item.active ? `sidebar-active ${!menu ? `before:bg-brand-${theme}` : 'before:bg-white dark:before:bg-brand-black-dark' } text-brand-${theme}` : 'text-brand-black-light dark:text-brand-gray-dark'} ${menu ? 'text-white dark:!text-brand-black-primary' : `hover:text-brand-${theme} dark:hover:text-brand-${theme}`}`}>
                  <span className={`text-4xl ${item.active && 'rotate-90'}`}>
                    {item.icon}
                  </span>
                  <span className='text-sm capitalize mt-2'>{item.name}</span>
              </div>
            </Tippy>
          </div>
        ))}
      </div>
    </aside>
  )
}

const Tooltip = ({data}) => {
  const {theme} = useContext(MainContext);

  return (
    data && <div className='bg-white w-64 dark:bg-[#333] text-brand-black-light dark:to-brand-gray-dark border-none capitalize'>
      <div className='p-5 border-b border-brand-gray dark:border-brand-black-primary'>
        <h3 className='font-bold text-xl'>{data.title}</h3>
      </div>
      <div className='flex flex-col gap-2 p-5 border-b border-brand-gray dark:border-brand-black-primary'>
        {data.body.map((item, idx) => (
          <div key={idx} className={`flex items-center gap-2 cursor-pointer hover:text-brand-${theme}`}>
            <span className='text-2xl'>
              {item.ico}
            </span>
            <span className='mt-0.5'>
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className={`flex items-center gap-2 p-5 cursor-pointer hover:text-brand-${theme}`}>
        <span className='text-2xl'>
          {data.footer.ico}
        </span>
        <span className='mt-0.5'>
          {data.footer.text}
        </span>
      </div>
    </div>
  )
}

export default SidebarLeft
