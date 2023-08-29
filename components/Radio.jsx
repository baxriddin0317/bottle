import React, { useContext } from "react";
import { BiSolidCircle } from "react-icons/bi";
import { MainContext } from "./Context";

const Radio = () => {
  const { theme, setLeft, setIcon, left, icon } = useContext(MainContext);

  const handleType = (id) => {
    if (id === "default") {
      setLeft(true);
    } else if (id === "hidden") {
      setLeft(false);
    }
  };

  return (
    <div className="flex flex-col gap-1 border-b border-brand-gray dark:border-brand-black-primary p-4 text-brand-black-light dark:text-brand-gray-dark capitalize font-bold">
      <h3 className="mb-2">Menu Types</h3>
      {/* raido inputs */}
      <label htmlFor="default" className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          onChange={(e) => handleType(e.target.id)}
          id="default"
          checked={left ? true : false}
          name="radio"
        />
        <div
          className={`relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-${theme} text-transparent peer-checked:text-brand-${theme} text-xs`}>
          <BiSolidCircle className="absolute left-[3px] top-[3px]" />
        </div>
        <span>default</span>
      </label>
      <label htmlFor="hidden" className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          onChange={(e) => handleType(e.target.id)}
          checked={!left ? true : false}
          id="hidden"
          name="radio"
        />
        <div
          className={`relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-${theme} text-transparent peer-checked:text-brand-${theme} text-xs`}>
          <BiSolidCircle className="absolute left-[3px] top-[3px]" />
        </div>
        <span>hidden</span>
      </label>
      <label htmlFor="icon" className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          onChange={() => setIcon((prev) => !prev)}
          checked={!icon ? true : false}
          id="icon"
          name="icon"
        />
        <div
          className={`relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-${theme} text-transparent peer-checked:text-brand-${theme} text-xs`}>
          <BiSolidCircle className="absolute left-[3px] top-[3px]" />
        </div>
        <span>icon only</span>
      </label>
    </div>
  );
};

export default Radio;
