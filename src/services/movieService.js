import * as genresAPI from "./genreService";

const movies = [
  {
    _id: "1",
    title: "Die Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
  },
  {
    _id: "2",
    title: "Cold sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 7,
    dailyRentalRate: 4,
    publishDate: "2008-01-03T19:28.8092",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((movie) => movie._id == id);
}

export function saveMovie(movie) {}
