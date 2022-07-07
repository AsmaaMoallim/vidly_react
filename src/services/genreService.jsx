import Config from "../config.json";
import http, {setEndPointPath} from "./httpServices";

export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
];

export async function getGenres() {
  return http.get(setEndPointPath("/genres"));
  // return genres.filter((g) => g);
}
