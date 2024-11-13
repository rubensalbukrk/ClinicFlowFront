import React from 'react'
import Header from '../../components/Header/Header'

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    direction?: DirectionProps;
}

const directionContainer = {
    row: 'flex flex-row',
    col: 'flex flex-col',
};

type DirectionProps = keyof typeof directionContainer;

const Container: React.FC<ContainerProps> = ({children, direction = "col", className}) => {
 return (
    <div className={`${directionContainer[direction]} w-screen h-screen justify-center gap-4 px-2 bg-sky-50 items-center
                sm:px-0 ${className}`}>
        <Header />
        {children}
    </div>
 );
}
export default Container;