import * as genresAPI from "./genreService";

let movies = [
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
    liked: false,
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
    liked: true,
  },
  {
    _id: "3",
    title: "Die Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "4",
    title: "Cold sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 7,
    dailyRentalRate: 4,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "5",
    title: "Die Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "6",
    title: "Cold sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 7,
    dailyRentalRate: 4,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "7",
    title: "Die Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "8",
    title: "Cold sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 7,
    dailyRentalRate: 4,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "9",
    title: "Die Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "10",
    title: "Cold sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 7,
    dailyRentalRate: 4,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "11",
    title: "Die Hard",
    genre: {
      _id: "12",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "13",
    title: "Cold sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 7,
    dailyRentalRate: 4,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "14",
    title: "Die Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "15",
    title: "Cold sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 7,
    dailyRentalRate: 4,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((movie) => movie._id == id);
}

export function deleteMovie(id) {
  const movieItem = movies.find((movie) => movie._id == id);
  movies = movies.filter((movie) => movie._id != movieItem._id);
  console.log(movies);
  return movies;
}

export function saveMovie(movie) {}
