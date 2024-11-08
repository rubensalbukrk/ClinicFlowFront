import React from 'react'
import Navbar from '../../components/Header/header';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
 return (
    <div className='flex flex-col w-full h-screen bg-sky-50 justify-center items-center'>
        <Navbar />
        {children}
    </div>
 );
}
export default Container;