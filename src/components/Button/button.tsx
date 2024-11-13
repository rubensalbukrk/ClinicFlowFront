import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  title: string;
  onClick: React.MouseEventHandler;
  variant?: sizeProps;
  color?: colorProps;
  icon?: iconProps;
  className?: ButtonHTMLAttributes<HTMLButtonElement> | string;
};

type sizeProps = keyof typeof sizes;
type colorProps = keyof typeof colors;
type iconProps = {
  icon?: React.ReactNode;
};

const sizes = {
  small: "px-4 py-2 text-sm",
  medium: "px-8 py-2 text-base",
  large: "px-10 py-3 text-lg",
  default: "py-2 px-2 text-base"
};
const colors = {
  primary: "bg-sky-500 text-white",
  secundary: "bg-sky-600 text-white",
  default: "bg-sky-400 text-white",
  outline: "border-2 bg-slate-50 border-sky-500/10 text-sky-500",
};

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  title,
  onClick,
  variant = "default",
  color = "default",
}) => {
  const style = `flex ${sizes[variant]} ${colors[color]} self-start items-center cursor-pointer gap-x-3 rounded-lg `;
  return (
    <div className={`${style}` + `${className}`} onClick={onClick}>
      {children}
      <p>{title}</p>
    </div>
  );
};
export default Button;
