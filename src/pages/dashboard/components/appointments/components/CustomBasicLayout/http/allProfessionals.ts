import UserService from "src/services/http/HttpUsers";

const userService = new UserService();

const allUsers = await userService.GET();

const PROFESSIONALS_DATA = allUsers.map((user) => ({
  professionalId: user.professionalId,
  name: user.name,
}));

export {PROFESSIONALS_DATA}