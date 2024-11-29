import {ContainerBase} from 'dashboard/components/ContainerBase/ContainerBase'
import { ItemListPacient } from './components/ItemList'

const datePacientsAPI = [
    {
        id: 1,
        type: "Total de pacientes cadastrados",
        count: 21,
    },
    {
        id: 2,
        type: "Pacientes atendidos nos últimos 6 meses",
        count: 13,
    },
    {
        id: 3,
        type: "Pacientes com pendências financeiras",
        count: 2,
    },
    {
        id: 4,
        type: "Novos pacientes atendidos no mês",
        count: 8,
    },
]

const FormPacients = () => {
    return (
        <ContainerBase title="PACIENTES">
            {datePacientsAPI.map(({id, type, count}) => {
                return <ItemListPacient key={id} id={id} type={type} count={count} />
            })}
        </ContainerBase>
    )
}

export {FormPacients}