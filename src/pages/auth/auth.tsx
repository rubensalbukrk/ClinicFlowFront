import React, { useEffect, useState } from "react";
import Box from "../../components/Box/box";
import { CiLock, CiUser } from "react-icons/ci";
import { LuUserPlus2 } from "react-icons/lu";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/text";
import Button from "../../components/Button/button";
<<<<<<< HEAD
import Container from "../../components/Container/Container";
=======
>>>>>>> 983e0d7 (change input colors and border)
import InputLabel from "../../components/Input/InputLabel/InputLabel";
import InputWarning from "../../components/Input/InputWarning/InputWarning";
import ButtonIcon from "../../components/Button/ButtonIcon/buttonIcon";
import colors from "tailwindcss/colors";
import "../../App.css";
<<<<<<< HEAD
=======
import Header from "../../components/Header/Header";
>>>>>>> 983e0d7 (change input colors and border)

const Auth: React.FC = () => {
  const [warnings, setWarnings] = useState<{ [key: string]: boolean }>({});
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  document.title = "Aréa de acesso";

  function verifyValues() {
    setWarnings({
      email: !email,
      pass: !pass,
    });
  }

  useEffect(() => {
    // Reseta o warning assim que o usuário começa a digitar nos campos
    if (email?.length > 0) {
      setWarnings((prev) => ({ ...prev, email: false }));
    }
    if (pass?.length > 0) {
      setWarnings((prev) => ({ ...prev, pass: false }));
    }
  }, [email, pass]);

  return (
<<<<<<< HEAD
    <Container direction="col" className="px-8">
      <Box size="w-full" direction="col"
      className="sm:items-center"
      >

=======
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Header />
      <Box size="medium" direction="col"
      className="self-center sm:items-center"
      >
>>>>>>> 983e0d7 (change input colors and border)
        <Text
          size="big"
          color="secundary"
          text="Conecte-se,"
          className="bebas-font-regular text-start"
        />
        <Text
          size="extra"
          color="secundary"
          className="bebas-font-regular text-start"
          text="obtenha todas as vantagens"
        />
      </Box>

      <Box
        size="base"
        direction="col"
        className="bg-white shadow-black/20 shadow-xl justify-start items-start px-4 mb-36 sm:mb-0"
      >
        <Input
          asWarning={warnings.email}
          onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
          icon={<CiUser size={22} />}
=======
          icon={<CiUser size={22} color={colors.sky[500]} opacity={0.7} />}
>>>>>>> 983e0d7 (change input colors and border)
          id="Email"
          placeholder="Digite seu email"
        >
          <InputLabel className="text-sky-600">Email</InputLabel>
          <InputWarning
            label="Um email é necessário"
            warning={warnings.email}
          />
        </Input>

        <Input
          asWarning={warnings.pass}
          id="senha"
          type="password"
<<<<<<< HEAD
          icon={<CiLock size={22} />}
=======
          icon={<CiLock size={22} color={colors.sky[500]} opacity={0.7} />}
>>>>>>> 983e0d7 (change input colors and border)
          placeholder="********"
          onChange={(e) => setPass(e.target.value)}
        >
          <InputLabel className="text-sky-600">Senha</InputLabel>
          <InputWarning
            label="Uma senha é necessária"
            warning={warnings.pass}
          />
        </Input>

        <div className="flex flex-row w-full mt-8 justify-between items-center">
          <Button
            onClick={verifyValues}
            title="Entrar"
            variant="medium"
            color="primary"
<<<<<<< HEAD
            className="w-2/12"
=======
            className="flex w-auto"
>>>>>>> 983e0d7 (change input colors and border)
          />
          <Button
            onClick={() => alert("registrar")}
            color="outline"
            title="Não é cliente?"
<<<<<<< HEAD
            className="w-7/12"
          >
            <ButtonIcon
              icon={<LuUserPlus2 size={22} color={colors.sky[500]} />}
=======
            className="flex w-7/12"
          >
            <ButtonIcon
              icon={<LuUserPlus2 size={22} color={colors.sky[500]} opacity={0.5} />}
>>>>>>> 983e0d7 (change input colors and border)
            />
          </Button>
        </div>
      </Box>
<<<<<<< HEAD
    </Container>
=======
    </div>
>>>>>>> 983e0d7 (change input colors and border)
  );
};
export default Auth;
