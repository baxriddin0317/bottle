import { theme } from "@/lib/themes";
import React from "react";

const Themes = () => {
  return (
    <div className="p-4">
      <h3 className="text-brand-black-light dark:text-brand-gray-dark capitalize font-bold mb-4">
      Themes
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {theme.map((item, idx) => (
          <div
            className="flex flex-col gap-2 items-center p-4 text-brand-black-light dark:text-brand-gray-dark border-brand-gray-dark dark:border-brand-black-primary border shadow-lg rounded-lg hover:border-brand-amber dark:hover:border-brand-amber cursor-pointer"
            key={idx}>
            <span
              className={`block w-8 h-8 rounded-full border border-white dark:border-brand-black-primary bg-brand-${item.name}`}></span>
            <span className="capitalize text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
