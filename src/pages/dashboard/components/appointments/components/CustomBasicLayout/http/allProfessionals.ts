import UserService from "src/services/http/HttpUsers";

const userService = new UserService();

const GetAllUsers = async () => {
  const users = await userService.GET();
  return users
}

const allUsers = await GetAllUsers()


const PROFESSIONALS_DATA = allUsers.map((user) => ({
  professionalId: user.professionalId,
  name: user.name,
}));

export {PROFESSIONALS_DATA}