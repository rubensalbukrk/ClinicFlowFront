import { Box } from "@mui/material";
import { ItemList } from "../../../../ItemList/ItemList";
import { ItemListProps } from "../../../../ItemList/type";

const appointsClosed: ItemListProps[] = [
  {
    avatar: `https://i.pravatar.cc/100?u=${Math.random()}`,
    name: 'João Silva',
    phone: '1234-5678',
    date: new Date('2024-12-01T10:00:00'),
    email: 'joao.silva@email.com',
    medic: 'Dr. Ana Souza',
    plan: 'Plano A',
    treatment: 'Consulta de rotina',
  },
  { 
    avatar: `https://i.pravatar.cc/100?u=${Math.random()}`,
    name: 'Maria Oliveira',
    phone: '9876-5432',
    date: new Date('2024-12-05T14:30:00'),
    email: 'maria.oliveira@email.com',
    medic: 'Dr. Carlos Pereira',
    plan: 'Plano B',
    treatment: 'Consulta de emergência',
  },
  {
    avatar: `https://i.pravatar.cc/100?u=${Math.random()}`,
    name: 'Carlos Mendes',
    phone: '4567-1234',
    date: new Date('2024-12-10T16:00:00'),
    email: 'carlos.mendes@email.com',
    medic: 'Dra. Luana Costa',
    plan: 'Plano C',
    treatment: 'Tratamento de fisioterapia',
  },
  {
    avatar: `https://i.pravatar.cc/100?u=${Math.random()}`,
    name: 'Fernanda Lima',
    phone: '3210-9876',
    date: new Date('2024-12-15T09:00:00'),
    email: 'fernanda.lima@email.com',
    medic: 'Dr. Pedro Martins',
    plan: 'Plano A',
    treatment: 'Consulta de acompanhamento',
  },
];

const FormCloseds = () => {
 return (
   <Box sx={{width: '100%',
    display: 'grid',
    alignItems: "start",
   }}>
        {appointsClosed.map((item) => {
            return <ItemList {...item} />
        })}
   </Box>
 );
}

export {FormCloseds}