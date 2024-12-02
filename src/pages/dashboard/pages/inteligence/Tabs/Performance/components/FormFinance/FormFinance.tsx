import { ContainerBase } from "dashboard/components/ContainerBase/ContainerBase";
import { ItemListFinance } from "./components/ItemList/ItemListFinance";

const dataAPI = [
    {
        id: 1,
        type: 'RECEITAS',
        value: "460,10",
        total: "1.500,40",
    },
    {
        id: 2,
        type: 'DESPESAS',
        value: "1.234,50",
        total: "2.700,00",
    },
    {
        id: 3,
        type: 'SALDO',
        value: "-1.234,50",
        total: "1.168,68",
    }
]


const FormFinance = () => {
 return (
  <ContainerBase
  title="FINANCEIRO"
  >
    {dataAPI.map((item) => 
    <ItemListFinance 
     id={item.id}
     type={item.type}
     value={item.value}
     total={item.total}
     /> )}
  </ContainerBase>
 );
}

export {FormFinance}