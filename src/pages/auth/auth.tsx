import React, { useEffect, useState } from "react";
import Box from "../../components/Box/box";
import { CiLock, CiUser } from "react-icons/ci";
import { LuUserPlus2 } from "react-icons/lu";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/text";
import Button from "../../components/Button/button";
import Container from "../../components/Container/Container";
import InputLabel from "../../components/Input/InputLabel/InputLabel";
import InputWarning from "../../components/Input/InputWarning/InputWarning";
import ButtonIcon from "../../components/Button/ButtonIcon/buttonIcon";
import colors from "tailwindcss/colors";

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
    <Container direction="col" className="px-8">

      <Text  text="Aréa de acesso" size="extra" />

      <Box size="base" direction="col" className="justify-start items-start px-4 mb-36 sm:mb-0">
        <Input
          asWarning={warnings.email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<CiUser size={22} />}
          id="Email"
          placeholder="Digite seu email"
        >
          <InputLabel>Email</InputLabel>
          <InputWarning
            label="Um email é necessário"
            warning={warnings.email}
          />
        </Input>

        <Input
          asWarning={warnings.pass}
          id="senha"
          type="password"
          icon={<CiLock size={22} />}
          placeholder="********"
          onChange={(e) => setPass(e.target.value)}
        >
          <InputLabel>Senha</InputLabel>
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
          />
          <Button
            onClick={() => alert("registrar")}
            color="outline"
            title="Não é cliente?"
          >
            <ButtonIcon
              icon={<LuUserPlus2 size={22} color={colors.sky[500]} />}
            />
          </Button>
        </div>
      </Box>
    </Container>
  );
};
export default Auth;
