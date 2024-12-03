import { ContainerBase } from "src/pages/dashboard/components/ContainerBase/ContainerBase";
import { TickConsultChart } from "./TickConsultsChart/TickConsultsChart";

const FormConsultations = () => {
 return (
   <ContainerBase
   title="CONSULTAS"
   >

        <TickConsultChart />

   </ContainerBase>
 );
}

export {FormConsultations}