"use client";
import "../../App.css"
import { useNavigate } from "react-router-dom";
import CompactMenu from "../MenuCompact/MenuCompact";
import Logo from '../../assets/logo.png'


const Header = () => {
  const navigation = useNavigate();

  return (
    <header>
      {/**MENU COMPACTO */}
      <nav
        className="fixed flex flex-row z-50 h-16 top-0 left-0 w-screen justify-between sm:hidden
                bg-white/30 backdrop-blur-md shadow-black/10 shadow-md"
      >
        <img src={Logo} height={28} width={32} alt='logo' className="ml-2 self-center" />
        <h1 className="bebas-font-regular mr-2 self-center text-2xl text-sky-600">Clínica Odontológica</h1>
        <CompactMenu />
        {/* <Logo className="flex ml-4 object-fill mr-3" /> */}
      </nav>

      <nav
        className="w-full h-20 px-2 top-0 left-0 z-30 fixed justify-around items-center 
                bg-slate-100/80 backdrop-blur-lg shadow-black/20 shadow-md hidden sm:flex"
      >
        {/* <Logo className="ml-4 w-60 object-fill z-50" /> */}

        <a className="cursor-pointer" onClick={() => navigation("/")}>
          Início
        </a>

        <a className="cursor-pointer" onClick={() => navigation("/services")}>
          Serviços
        </a>

        <a className="cursor-pointer" onClick={() => navigation("/services")}>
          Especialistas
        </a>

        <a className="cursor-pointer" onClick={() => navigation("/auth")}>
          Acesso
        </a>
      </nav>
    </header>
  );
};

export default Header;
