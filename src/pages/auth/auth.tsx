import React, { useEffect, useState } from "react";
import Box from "../../components/Box/box";
import { CiLock, CiUser } from "react-icons/ci";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/button";
import Container from "../../components/Container/Container";
import InputLabel from "../../components/Input/InputLabel/InputLabel";
import InputWarning from "../../components/Input/InputWarning/InputWarning";

const Auth: React.FC = () => {
  const [warnings, setWarnings] = useState<{ [key: string]: boolean }>({});
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

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
    <Container>
      <h1 className="text-6xl my-20">AUTENTICAÇÃO</h1>

      <Box size="small" direction="col" className="items-start justify-start">
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

        <Button
          onClick={verifyValues}
          title="Entrar"
          variant="large"
          color="primary"
        />
      </Box>
    </Container>
  );
};
export default Auth;
