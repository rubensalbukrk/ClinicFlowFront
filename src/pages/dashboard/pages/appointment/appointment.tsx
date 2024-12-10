import { Box } from "@mui/material"
import {FormAppointments} from 'src/pages/dashboard/components/appointments/Appointments'

const Appointments = () => {
    return (
        <Box sx={{display: 'flex', mr: 'auto'}}>
            <FormAppointments />
        </Box>
    )
}

export {Appointments}