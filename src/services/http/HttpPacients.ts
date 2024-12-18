import axios, {AxiosInstance} from 'axios'
import { API } from '../api'
import {IPacient} from 'src/interfaces/pacient'

interface FetchDataPacients {
  Pacients: IPacient[]
}

class PacientService {

    private api: AxiosInstance;

    constructor() {
      this.api = axios.create({
        baseURL: API.pacients
      });
    }
  
    async CREATE(pacient: IPacient) {
      try {
        const response = await this.api.post('/', pacient);
        return response.data;
      } catch (error) {
        console.error('Erro ao criar o paciente:', error);
        throw error;
      }
    }
    async GET() {
      try {
        const response = await this.api.get<FetchDataPacients>('/');
        return response.data.Pacients;
      } catch (error) {
        console.error('Erro ao obter os paciente:', error);
        throw error;
      }
    }
    async UPDATE(pacient: IPacient) {
      try {
        const response = await this.api.put(`/`, pacient);
        return response.data;
      } catch (error) {
        console.error('Erro ao atualizar o paciente:', error);
        throw error;
      }
    }
    async DELETE(pacientId: string) {
      try {
        const response = await this.api.delete(pacientId);
        return response.data;
      } catch (error) {
        console.error('Erro ao deletar o paciente:', error);
        throw error;
      }
    }
  }
  
  export default PacientService;