import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de menu hambúrguer e fechar
import colors from "tailwindcss/colors";

const CompactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<<<<<<< HEAD
    <div className="relative z-30">
      <button
        onClick={toggleMenu}
        className="text-white mt-2 mr-2 focus:outline-none"
      >
        {isOpen ? (
          <div className="flex w-9 h-9 mb-2 rounded-full justify-center items-center bg-blue-500">
            <FaTimes size={26} color="white" />
          </div>
=======
    <div className="relative z-30 p-0 m-0 items-center">
      <button
        onClick={toggleMenu}
        className="text-white mt-3 mr-2 focus:outline-none"
      >
        {isOpen ? (
          null
>>>>>>> 983e0d7 (change input colors and border)
        ) : (
          <FaBars size={30} color={colors.sky[500]} className="mb-1" />
        )}
      </button>

<<<<<<< HEAD
      <nav
        className={`w-72 h-screen absolute top-0 right-16 bg-white p-4 transition-transform duration-300 ${
          isOpen ? "transform scale-100" : "transform scale-0"
        } origin-top-right md:hidden rounded-lg`}
      >
        <div className="flex w-full h-20 bg-blue-400 rounded-lg mb-8 items-center justify-center">
          <h1 className="text-white font-extrabold text-3xl">MENU</h1>
        </div>
        <ul className="space-y-4 font-bold">
          <li>
              <p onClick={() => navigation('/')} className="text-sky-600 text-2xl hover:text-gray-300">
=======

      <div
        className={`absolute w-screen h-screen top-0 -right-0 bg-stone-900 p-4 transition-transform duration-300 ${
          isOpen ? "transform scale-100 transition-all duration-500 ease-out" : "transform scale-0 transition-all duration-500 ease-out"
        } bg-stone-900/95 origin-left md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute right-4 flex w-9 h-9 mb-2 rounded-full justify-center items-center bg-blue-500">
          <FaTimes size={26} color="white" />
        </button>
        <nav className='absolute w-7/12 mt-20 '>
        <ul className="text-start space-y-4 font-bold">
          <li>
              <p onClick={() => navigation('/')} className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
>>>>>>> 983e0d7 (change input colors and border)
                Inicio
              </p>

          </li>
          <li>

<<<<<<< HEAD
              <p onClick={() => navigation('/services')} className="text-sky-600 text-2xl hover:text-gray-300">
=======
              <p onClick={() => navigation('/services')} className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
>>>>>>> 983e0d7 (change input colors and border)
                Serviços
              </p>

          </li>
          <li>
<<<<<<< HEAD
            
              <p onClick={() => navigation('/about')} className="text-sky-600 text-2xl hover:text-gray-300">
=======
              <p onClick={() => navigation('/about')} className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
>>>>>>> 983e0d7 (change input colors and border)
                Sobre nós
              </p>
          </li>
          <li>
          </li>
          <li>
            <p
              onClick={() => window.open("https://wa.me/5583987904804")}
<<<<<<< HEAD
              className="text-sky-600 text-2xl hover:text-gray-300"
            >
=======
              className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
>>>>>>> 983e0d7 (change input colors and border)
              Contato
            </p>
          </li>
          <li>

<<<<<<< HEAD
              <p onClick={() => navigation('/auth')} className="text-sky-600 mt-10 text-2xl hover:text-gray-300">
=======
              <p onClick={() => navigation('/auth')} className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
>>>>>>> 983e0d7 (change input colors and border)
                Login
              </p>

          </li>
        </ul>
<<<<<<< HEAD
      </nav>
=======
        </nav>
        
      </div>
>>>>>>> 983e0d7 (change input colors and border)
    </div>
  );
};

export default CompactMenu;
