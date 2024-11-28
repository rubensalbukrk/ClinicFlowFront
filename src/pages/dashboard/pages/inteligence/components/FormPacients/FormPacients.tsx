import { Typography} from '@mui/material'
import {ContainerBase} from 'dashboard/components/ContainerBase/ContainerBase'

const FormPacients = () => {
    return (
        <ContainerBase title="PACIENTES">
            <Typography className="w-full" variant='h6'>
              PACIENTES
            </Typography>
        </ContainerBase>
    )
}

export {FormPacients}