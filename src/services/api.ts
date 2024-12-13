type IApi = {
    users: string
    appointments: string
}
export const API: IApi = {
    users: "http://localhost:5500/v1/users",
    appointments: "http://localhost:5500/v1/appointments",
} 
