import React, { useContext } from 'react'
import { CiLaptop } from "react-icons/ci"
import {menu} from "@/lib/sidebar"
import { MainContext } from './Context'

const SidebarLeft = () => {
  const {left} = useContext(MainContext);

  return (
    <aside className={`fixed top-20 shadow-md dark:shadow-none bg-white dark:bg-brand-black-dark text-brand-black-light dark:text-white h-screen transition-all duration-500 ease-in-out ${left ? 'left-0' : '-left-full'}`}>
      <div className='flex flex-col w-full h-screen overflow-y-auto pb-10'>
        {menu.map((item, idx) => (
          <div key={idx} className={`relative group flex flex-col items-center  hover:text-brand-amber dark:hover:text-brand-amber py-6 px-5 border-b border-brand-gray dark:border-brand-black-primary cursor-pointer ${item.active ? 'sidebar-active before:bg-brand-amber text-brand-amber' : 'text-brand-black-light dark:text-brand-gray-dark'}`}>
            <span className={`text-4xl`}>
              {item.icon}
            </span>
            <span className='text-sm capitalize mt-2'>{item.name}</span>

            <div className='absolute bg-white left-[110%] top-1/2 -translate-y-1/2 z-50 w-1/2 rounded-md p-2 shadow-md scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out'>
              salom0
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default SidebarLeft
