import { ContainerBase } from "dashboard/components/ContainerBase/ContainerBase";
import { ItemList } from "dashboard/components//ItemList/ItemList";
import { ItemListProps } from "dashboard/components/ItemList/type";
import ButtonMore from "dashboard/components/ButtonMore/ButtonMore"

export const AppointsOn: ItemListProps[] = [
  {
    avatar: `https://i.pravatar.cc/100?u=${Math.random()}`,
    name: "John Doe",
    phone: "(12) 97456-7890",
    date: new Date("2024-12-15"),
    email: "johndoe@example.com",
    medic: "Dr. Lucas Barbosa",
    plan: "Premium",
    treatment: "Ortodontia",
  },
  {
    avatar: `https://i.pravatar.cc/100?u=${Math.random()}`,
    name: "Jane Smith",
    phone: "(83) 91654-3210",
    date: new Date("2024-12-18"),
    email: "janesmith@example.com",
    medic: "Dr. Lucas Barbosa",
    plan: "Básico",
    treatment: "Limpeza dental",
  },
  {
    avatar: `https://i.pravatar.cc/100?u=${Math.random()}`,
    name: "Carlos Silva",
    phone: "(21) 98765-4321",
    date: new Date("2024-12-20"),
    email: "carlossilva@example.com",
    medic: "Dr. Lucas Barbosa",
    plan: "Gold",
    treatment: "Clareamento dental",
  },
];

const FormAppointsConfirm = () => {
  return (
    <ContainerBase title="CONSULTAS A CONFIRMAR">
      {AppointsOn.map((item: ItemListProps) => {
        return <ItemList {...item} menuType="appointsConfirm" key={item.phone} />;
      })}

      <ButtonMore onClick={() => alert("VER MAIS CONSULTAS A CONFIRMAR")} />
    </ContainerBase>
  );
};

export { FormAppointsConfirm };
