import { ContainerBase } from "dashboard/components/ContainerBase/ContainerBase";
import { ItemListAppointsConfirmProps } from "../../types";
import { AppointItemList } from "./components/ItemList/ItemList";


const itemsAPI: ItemListAppointsConfirmProps[] = [
  {
    name: "John Doe",
    phone: "(12) 97456-7890",
    date: new Date('2024-12-15'),
    email: "johndoe@example.com",
    medic: 'Dr. Lucas Barbosa',
    plan: "Premium",
    treatment: "Ortodontia"
  },
  {
    name: "Jane Smith",
    phone: "(83) 91654-3210",
    date: new Date('2024-12-18'),
    email: "janesmith@example.com",
    medic: 'Dr. Lucas Barbosa',
    plan: "Básico",
    treatment: "Limpeza dental"
  },
  {
    name: "Carlos Silva",
    phone: "(21) 98765-4321",
    date: new Date('2024-12-20'),
    email: "carlossilva@example.com",
    medic: 'Dr. Lucas Barbosa',
    plan: "Gold",
    treatment: "Clareamento dental"
  }
]

const FormAppointsConfirm = () => {
  return (
    <ContainerBase title="CONSULTAS A CONFIRMAR">
      {itemsAPI.map((item: ItemListAppointsConfirmProps) => {
        return (
          <AppointItemList {...item} key={item.phone} />
        )
      })}
    </ContainerBase>
  );
};

export { FormAppointsConfirm };
