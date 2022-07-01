const genres = [
  {
    _id: "1",
    name: "Action",
  },
  {
    _id: "2",
    name: "Horror",
  },
  {
    _id: "3",
    name: "Rommance",
  },
];

export function getGenres() {
  return genres;
}
export function getGenre(id) {
  return genres.find((genre) => genre._id == id);
}
