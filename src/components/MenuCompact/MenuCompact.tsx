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
    <div className="relative z-30 p-0 m-0 items-center">
      <button
        onClick={toggleMenu}
        className="text-white mt-3 mr-2 focus:outline-none"
      >
        {isOpen ? (
          null
        ) : (
          <FaBars size={30} color={colors.sky[500]} className="mb-1" />
        )}
      </button>


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
                Inicio
              </p>

          </li>
          <li>

              <p onClick={() => navigation('/services')} className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
                Serviços
              </p>

          </li>
          <li>
              <p onClick={() => navigation('/about')} className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
                Sobre nós
              </p>
          </li>
          <li>
          </li>
          <li>
            <p
              onClick={() => window.open("https://wa.me/5583987904804")}
              className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
              Contato
            </p>
          </li>
          <li>

              <p onClick={() => navigation('/auth')} className="text-white border-b-2 border-white text-2xl inline-block hover:text-gray-300">
                Login
              </p>

          </li>
        </ul>
        </nav>
        
      </div>
    </div>
  );
};

export default CompactMenu;
