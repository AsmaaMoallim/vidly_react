import jwtdecode from "jwt-decode";
import { getUser } from "../services/usersService";

export const setUserBasedOnToken = async (token, callback) => {
  const { _id: userId } = jwtdecode(token);
  await getUser(userId)
    .then((res) => {
      callback(res.data);
    })
    .catch((ex) => {
      console.log("Error ", ex);
    });
};
