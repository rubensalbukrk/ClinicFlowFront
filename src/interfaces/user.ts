import { IProfessions } from "./professions"


interface IUser extends IProfessions {
    professionalId: string
    name: string
    email: string
    password: string
    phone: string
    avatar?: string
    
}

export type {IUser}