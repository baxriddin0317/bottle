import React from "react";
import { BiSolidCircle } from "react-icons/bi"

const Radio = () => {
  return (
    <div className="flex flex-col gap-1 border-b border-brand-gray dark:border-brand-black-primary p-4 text-brand-black-light dark:text-brand-gray-dark capitalize font-bold">
      <h3 className="mb-2">Menu Types</h3>
      {/* raido inputs */}
      <label
        htmlFor="default"
        className="flex items-center gap-2 cursor-pointer">
        <input type="radio" className="hidden peer" id="default" name="redio" />
        <div className="relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-amber text-transparent peer-checked:text-brand-amber text-xs">
          <BiSolidCircle className="absolute left-[3px] top-[3px]" />
        </div>
        <span>default</span>
      </label>
      <label
        htmlFor="hidden"
        className="flex items-center gap-2 cursor-pointer">
        <input type="radio" className="hidden peer" id="hidden" name="redio" />
        <div className="relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-amber text-transparent peer-checked:text-brand-amber text-xs">
          <BiSolidCircle className="absolute left-[3px] top-[3px]" />
        </div>
        <span>hidden</span>
      </label>
      <label htmlFor="Icon" className="flex items-center gap-2 cursor-pointer">
        <input type="radio" className="hidden peer" id="Icon" name="redio" />
        <div className="relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-amber text-transparent peer-checked:text-brand-amber text-xs">
          <BiSolidCircle className="absolute left-[3px] top-[3px]" />
        </div>
        <span>Icon Only</span>
      </label>
      <label htmlFor="Wide" className="flex items-center gap-2 cursor-pointer">
        <input type="radio" className="hidden peer" id="Wide" name="redio" />
        <div className="relative p-1 w-5 h-5 bg-transparent rounded-full border border-brand-gray-dark peer-checked:border-brand-amber text-transparent peer-checked:text-brand-amber text-xs">
          <BiSolidCircle className="absolute left-[3px] top-[3px]" />
        </div>
        <span>Wide</span>
      </label>
    </div>
  );
};

export default Radio;
