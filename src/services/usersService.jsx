import http, { setEndPointPath } from "./httpServices";

// export function getUsers() {
//   return http.get(setEndPointPath("/users"));
// }

// export function getUser(id) {
//   return http.get(setEndPointPath(`/users/${id}`));
// }

// export function deleteUser(id) {
//   return http.delete(setEndPointPath(`/users/${id}`));
// }

export function register(user) {
  return http.post(setEndPointPath(`/users`), {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
