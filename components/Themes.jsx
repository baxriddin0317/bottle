import { themesColor } from "@/lib/themes";
import React, { useContext } from "react";
import { MainContext } from "./Context";

const Themes = () => {
  const {setTheme, theme} = useContext(MainContext);

  return (
    <div className="p-4">
      <h3 className="text-brand-black-light dark:text-brand-gray-dark capitalize font-bold mb-4">
      Themes
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {themesColor.map((item, idx) => (
          <div
            className={`flex flex-col gap-2 items-center p-4  border shadow-lg rounded-lg hover:border-brand-${theme} dark:hover:border-brand-${theme} cursor-pointer group ${theme === item.name ? `border-brand-${theme}` : 'border-brand-gray-dark dark:border-brand-black-primary'}`}
            key={idx}
            onClick={() => setTheme(item.name)}
          >
            <span className={`block w-8 h-8 rounded-full border border-white dark:border-brand-black-primary shadow-md bg-brand-${item.name}`}></span>
            <span className={`capitalize text-sm text-brand-${theme} dark:text-brand-gray-dark group-hover:text-brand-${theme}`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
