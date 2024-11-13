import React from "react";
import { InputProps } from "./type";
import InputIcon from "./InputIcon/InputIcon";

const Input: React.FC<InputProps> = ({ id, children, asWarning, className, icon, ...props }) => {
  return (
    <div className={`flex flex-col my-2 justify-start items-start space-y-2 relative ${asWarning ? "mb-8" : "mb-0"}`}>
      {" "}
      {/* `relative` para permitir posicionamento absoluto */}
      {children}
      <div className={`${icon ? "gap-x-6" : "gap-x-0"}`}>
        {icon && <InputIcon icon={icon} />}

        <input
          key={id}
          id={id}
          {...props}
          className={` ${className} w-80 px-4 py-2 border rounded-md ${icon ? "px-9" : "px-2"}`}
        />
      </div>
    </div>
  );
};

export default Input;
