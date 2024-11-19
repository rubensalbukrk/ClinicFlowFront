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
    <div className="relative z-30">
      <button
        onClick={toggleMenu}
        className="text-white mt-2 mr-2 focus:outline-none"
      >
        {isOpen ? (
          <div className="flex w-9 h-9 mb-2 rounded-full justify-center items-center bg-blue-500">
            <FaTimes size={26} color="white" />
          </div>
        ) : (
          <FaBars size={30} color={colors.sky[500]} className="mb-1" />
        )}
      </button>

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
                Inicio
              </p>

          </li>
          <li>

              <p onClick={() => navigation('/services')} className="text-sky-600 text-2xl hover:text-gray-300">
                Serviços
              </p>

          </li>
          <li>
            
              <p onClick={() => navigation('/about')} className="text-sky-600 text-2xl hover:text-gray-300">
                Sobre nós
              </p>
          </li>
          <li>
          </li>
          <li>
            <p
              onClick={() => window.open("https://wa.me/5583987904804")}
              className="text-sky-600 text-2xl hover:text-gray-300"
            >
              Contato
            </p>
          </li>
          <li>

              <p onClick={() => navigation('/auth')} className="text-sky-600 mt-10 text-2xl hover:text-gray-300">
                Login
              </p>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CompactMenu;
