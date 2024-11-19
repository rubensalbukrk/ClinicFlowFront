import Input from "../Input/Input";
import Button from "../Button/button";
import { BsFillSendFill } from "react-icons/bs";
import {
  CiCalendarDate,
  CiMail,
  CiPhone,
  CiTimer,
  CiUser,
} from "react-icons/ci";
import ButtonIcon from "../Button/ButtonIcon/buttonIcon";
import "../Carousel/style.css";
import colors from "tailwindcss/colors";

const FormContact = () => {
  return (
    <form
      className="sticky w-auto py-8 px-4 top-[15%] items-center justify-between right-28 backdrop-blur-lg z-10
      sm:absolute sm:bg-sky-400/40
      "
    >
      <h1 className="bebas-font-regular text-start text-3xl mb-4 sm:text-white">
<<<<<<< HEAD
        ENTRE EM CONTATO
=======
        AGENDE-SE
>>>>>>> 983e0d7 (change input colors and border)
      </h1>
      <Input
        id="name"
        placeholder="Nome"
        className="bebas-font-light tracking-widest text-md pl-14"
        icon={<CiUser size={38} color={colors.gray[400]} />}
      ></Input>
      <Input
        id="email"
        placeholder="Email"
        className="bebas-font-light tracking-widest text-md pl-14"
        icon={<CiMail size={38} color={colors.gray[400]} />}
      ></Input>
      <Input
        id="phone"
        placeholder="Telefone"
        className="bebas-font-light tracking-widest text-md pl-14"
        icon={<CiPhone size={38} color={colors.gray[400]} />}
      ></Input>
      <Input
        id="date"
        placeholder="Data"
        className="bebas-font-light tracking-widest text-md pl-14"
        icon={<CiCalendarDate size={38} color={colors.gray[400]}/>}
      />
      <Input
        id="time"
        placeholder="Time"
        className="bebas-font-light tracking-widest text-md pl-14"
        icon={<CiTimer size={38} color={colors.gray[400]} />}
      />
      <Button
        className="bebas-font-light mt-8 w-9/12 tracking-wider"
        variant="medium"
        title="Solicitar consultar"
        onClick={() => alert("SOLICITAÇÃO DE CONSULTA ENVIADA")}
      >
        <ButtonIcon icon={<BsFillSendFill color="white" size={22} />} />
      </Button>
    </form>
  );
};

export { FormContact };
