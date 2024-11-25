import React from "react";
import { InputProps } from "./type";
import InputIcon from "./InputIcon/InputIcon";

const Input: React.FC<InputProps> = (
  { 
    id, 
    children, 
    asWarning, 
    className,
    icon, 
    ...props 
  }
) => {
  return (
    <div className={`flex flex-col my-2 items-start relative ${asWarning ? "mb-8" : "mb-0"}`}>
      {/* `relative` para permitir posicionamento absoluto */}
      {children}
      <div className={`${icon ? "" : ""}`}>
        {icon && <InputIcon icon={icon} />}
      </div>
      <input
          key={id}
          id={id}
          {...props}
          
          className={`${className} ` +  `w-80 pl-10 pb-1 pt-2 placeholder-gray-500/40 ring-1 ring-sky-400/20 ring-offset-2 focus:outline-none focus:ring-sky-600 rounded-md ${icon ? "px-9" : "px-2"}`}
        />
    </div>
  );
};

export default Input;
