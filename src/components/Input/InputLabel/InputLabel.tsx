import React from "react";
import { InputLabelProps} from "../type";

const InputLabel: React.FC<InputLabelProps> = ({ id, children, ...props }) => {
  return (
    <label htmlFor={id} className="text-slate-900 font-semibold" {...props}>
      {children}
    </label>
  );
}

export default InputLabel;
