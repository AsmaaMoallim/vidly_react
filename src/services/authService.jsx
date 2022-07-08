import http, { setEndPointPath } from "./httpServices";


export function Login(user) {
  return http.post(setEndPointPath(`/auth`), {
    email: user.username, 
    password: user.password,
  });
}
