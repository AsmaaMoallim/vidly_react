const genres = [
  {
    _id: "1",
    name: "Action",
  },
  {
    _id: "1",
    name: "Horror",
  },
];

export function getGenre(id) {
  return genres.find((genre) => genre._id == id);
}