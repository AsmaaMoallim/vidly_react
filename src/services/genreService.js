// const genres = [
//   {
//     _id: "1",
//     name: "Action",
//   },
//   {
//     _id: "2",
//     name: "Horror",
//   },
//   {
//     _id: "3",
//     name: "Rommance",
//   },
// ];

// export function getGenres() {
//   return genres;
// }
// export function getGenre(id) {
//   return genres.find((genre) => genre._id == id);
// }

export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
