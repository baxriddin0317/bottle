import React, { useContext } from "react";
import { BiSolidCircle } from "react-icons/bi"
import { MainContext } from "./Context";

const radios = [
  {
    name: 'defalut',
    text: 'defalut',
  },
  {
    name: 'hidden',
    text: 'hidden',
  },
  {
    name: 'icon',
    text: 'icon only',
  },
  {
    name: 'wide',
    text: 'wide',
  },
]

const Radio = () => {
  const {theme} = useContext(MainContext);

  return (
    <div className="flex flex-col gap-1 border-b border-brand-gray dark:border-brand-black-primary p-4 text-brand-black-light dark:text-brand-gray-dark capitalize font-bold">
      <h3 className="mb-2">Menu Types</h3>
      {/* raido inputs */}
      {radios.map((item, idx) => (
        <label
          key={idx}
          htmlFor={item.name}
          className="flex items-center gap-2 cursor-pointer">
          <input type="radio" className="hidden peer" id={item.name} name="redio" />
          <div className={`relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-${theme} text-transparent peer-checked:text-brand-${theme} text-xs`}>
            <BiSolidCircle className="absolute left-[3px] top-[3px]" />
          </div>
          <span>{item.text}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
