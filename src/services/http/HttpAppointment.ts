import axios, {AxiosInstance} from 'axios'
import { API } from '../api'
import { AppointmentModel } from "@devexpress/dx-react-scheduler"

class AppointmentService {

    private api: AxiosInstance;

    constructor() {
      this.api = axios.create({
        baseURL: API.appointments
      });
    }
  
    async CREATE(appointment: AppointmentModel) {
      try {
        const response = await this.api.post('/',appointment);
        return response.data;
      } catch (error) {
        console.error('Erro ao criar o agendamento:', error);
        throw error;
      }
    }
  
    async GET() {
      try {
        const response = await this.api.get('/');
        return response.data.Appointments;
      } catch (error) {
        console.error('Erro ao obter os agendamentos:', error);
        throw error;
      }
    }
  
    async UPDATE(appointment: AppointmentModel) {
      try {
        const response = await this.api.put(`/`, appointment);
        return response.data;
      } catch (error) {
        console.error('Erro ao atualizar o agendamento:', error);
        throw error;
      }
    }
    async DELETE(appointmentId: string) {
      try {
        const response = await this.api.delete(appointmentId);
        return response.data;
      } catch (error) {
        console.error('Erro ao deletar o agendamento:', error);
        throw error;
      }
    }
  }
  
  export default AppointmentService;