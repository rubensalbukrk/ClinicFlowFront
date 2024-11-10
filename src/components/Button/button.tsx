import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    title: string;
    onClick: React.MouseEventHandler;
    variant: sizeProps;
    color?: colorProps;
    className?: ButtonHTMLAttributes<HTMLButtonElement> | string
}

type sizeProps = keyof typeof sizes;
type colorProps = keyof typeof colors;

const sizes = {
    small: 'px-2 h-10 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-6 py-4 text-lg',
};
const colors = {
    primary: 'bg-sky-500',
    secundary: 'bg-sky-600',
    default: 'bg-sky-400',
};

const Button = ({className, title, onClick, variant, color = "default"}: ButtonProps) => {
    const style = `${sizes[variant]} ${colors[color]} my-4 self-center text-white rounded-lg ${className}`
 return (
    <button
    className={`${style}`}
    onClick={onClick}>
        <p>{title}</p>
    </button>
 );
}
export default Button;