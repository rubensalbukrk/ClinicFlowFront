import React from "react";
import { LabelWarningProps } from "../type";

const InputWarning: React.FC<LabelWarningProps> = ({
  warning = false,
  label = "",
  ...props
}) => {
  return (
    <p className={`absolute top-[100%] text-red-500 font-semibold ${warning ? "mb-10" : "mb-0"}`} {...props}>
      {warning && label}
    </p>
  );
};

export default InputWarning;
