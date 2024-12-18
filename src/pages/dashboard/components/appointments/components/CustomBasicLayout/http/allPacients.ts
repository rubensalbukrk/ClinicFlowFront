import PacientService from "src/services/http/HttpPacients";

const pacientServices = new PacientService();

const allPacients = await pacientServices.GET();

const PACIENTS_DATA = allPacients.map((pacient) => ({
  pacientId: pacient.pacientId,
  name: pacient.name
}))

export {PACIENTS_DATA}
