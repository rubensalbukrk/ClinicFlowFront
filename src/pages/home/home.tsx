import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/button";
import Text from '../../components/Text/text'
import Box from "../../components/Box/box";

const Home: React.FC = () => {
  return (
    <Container>
      <h1 className="text-6xl my-8">HOME</h1>

      <Box size="small">
        <Text text="Está preparado para conhecer nossos melhores planos?"
        variant="small"
        />
        <Text text="Realizar os melhores serviços"
        variant="medium"
        color="primary"
        />
        <Text text="Com os melhores profissionais"
        variant="large"
        color="secundary"
        />
        <Text text="Bem aqui"
        variant="extra"
        color="secundary"
        />
         <Text text="Vem"
        variant="big"
        color="secundary"
        />
                    <Button
          title="Experimental"
          variant="small"
          onClick={() => alert("conhecer")}
        />
        <Button
          title="Basico"  
          color="primary"
          variant="medium"
          onClick={() => alert("conhecer")}
        />
        <Button
          title="PLANO VIP"
          variant="large"
          color="secundary"
          onClick={() => alert("conhecer")}
        />
      </Box>
 
    </Container>
  );
};
export default Home;
