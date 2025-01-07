import PacientService from "src/services/http/HttpPacients";

const pacientServices = new PacientService();

const GetAllPacients = async () => {
  const pacients = await pacientServices.GET();
  return pacients
}

const allPacients = await GetAllPacients()

const PACIENTS_DATA = allPacients.map((pacient: any) => ({
  pacientId: pacient.pacientId,
  name: pacient.name
}))

export {PACIENTS_DATA}
