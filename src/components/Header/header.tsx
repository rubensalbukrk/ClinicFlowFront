import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 w-full h-16 justify-around items-center bg-blue-600">
      <Link
        to="/"
        className="text-white font-sans text-2xl rounded-lg items-center justify-center"
      >
        Início
      </Link>
      <Link
        to="/manager"
        className="text-white font-sans text-2xl rounded-lg items-center justify-center"
      >
        Agendamentos
      </Link>
      <Link
        to="/Auth"
        className="text-white font-sans text-2xl rounded-lg items-center justify-center"
      >
        Entrar
      </Link>
    </nav>
  );
};

export default Navbar;
