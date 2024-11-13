import React from "react";
import { InputLabelProps} from "../type";

const InputLabel: React.FC<InputLabelProps> = ({ id, children, className, ...props }) => {
  return (
    <label htmlFor={id} className={` ${className} ` + `font-semibold ` } {...props}>
      {children}
    </label>
  );
}

export default InputLabel;
