import { ContainerBase } from "src/pages/dashboard/components/ContainerBase/ContainerBase";
import { TickConsultChart } from "./components/TickConsultsChart/TickConsultsChart";
import { Box } from "@mui/material";
import { CountConsultDetail } from "./components/CountConsultDetails/CountConsultDetails";

const FormConsultations = () => {
 return (
   <ContainerBase
   title="CONSULTAS"
   direction="column"
   >
    <Box className=" w-full flex flex-col justify-between sm:flex-row">
      <Box className="flex flex-col w-full h-32 rounded-lg items-center justify-center">
        <CountConsultDetail 
        count={20}
        title="Consulta realizadas no período"
        onClick={() => alert('ver mais')}
        />
      </Box>
      <Box className="flex flex-col w-full h-32 rounded-lg items-center justify-center">
      <CountConsultDetail 
        count={2}
        color="error"
        title="Faltas e cancelamentos no período"
        onClick={() => alert('ver mais')}
        />
      </Box>
    </Box>
    <TickConsultChart />
      
   </ContainerBase>
 );
}

export {FormConsultations}