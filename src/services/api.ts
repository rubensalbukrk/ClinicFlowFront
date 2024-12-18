type IApi = {
    users: string
    appointments: string
    pacients: string
}
export const API: IApi = {
    users: "http://localhost:5500/v1/users",
    appointments: "http://localhost:5500/v1/appointments",
    pacients: "http://localhost:5500/v1/pacients",
} 
