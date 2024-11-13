import React from "react";

const sizeBox = {
    small: 'w-3/12',
    medium: 'w-5uto',
    base: 'w-auto',
    large: 'w-7/12',
    extra: 'w-8/12',
    full: 'w-full',
    'w-full': 'w-full',
    'h-full': 'h-full'
};
const directionBox = {
    row: 'flex flex-row',
    col: 'flex flex-col',
};

type SizeProps = keyof typeof sizeBox;
type DirectionProps = keyof typeof directionBox;


type BoxProps = {
    children: React.ReactNode;
    size?: SizeProps;
    direction?: DirectionProps;
    className?: string;
    ref?: unknown;
}

const Box: React.FC<BoxProps> = ({ children, size = "medium", direction = "col", className}) => {
    const style = `flex ${directionBox[direction]} ${sizeBox[size]} py-4 items-start justify-start rounded-lg `
 return (
    <div className={`${style}` + `${className}`}>
        {children}
    </div>
 );
}
export default Box;