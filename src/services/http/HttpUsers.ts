import axios, {AxiosInstance} from 'axios'
import { API } from '../api'
import {IUser} from 'src/interfaces/user'

interface FetchDataUsers {
  Users: Pick<IUser, 'professionalId' | 'name'>[]
}

class UserService {

    private api: AxiosInstance;

    constructor() {
      this.api = axios.create({
        baseURL: API.users
      });
    }
  
    async CREATE(user: IUser) {
      try {
        const response = await this.api.post('/', user);
        return response.data;
      } catch (error) {
        console.error('Erro ao criar o usuário:', error);
        throw error;
      }
    }
    async GET() {
      try {
        const response = await this.api.get<FetchDataUsers>('/');
        return response.data.Users;
      } catch (error) {
        console.error('Erro ao obter os usuários:', error);
        throw error;
      }
    }
    async UPDATE(user: IUser) {
      try {
        const response = await this.api.put(`/`, user);
        return response.data;
      } catch (error) {
        console.error('Erro ao atualizar o usuário:', error);
        throw error;
      }
    }
    async DELETE(userId: string) {
      try {
        const response = await this.api.delete(userId);
        return response.data;
      } catch (error) {
        console.error('Erro ao deletar o usuário:', error);
        throw error;
      }
    }
  }
  
  export default UserService;