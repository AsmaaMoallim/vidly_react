import * as genresAPI from "./genreService";

let movies = [
  {
    _id: "1",
    title: "live Hard",
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
    title: "tea sea",
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
    title: "bayader Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 34,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "4",
    title: "ahmar sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 77,
    dailyRentalRate: 47,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "5",
    title: "blue Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 98,
    dailyRentalRate: 6.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "6",
    title: "oman sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 0,
    dailyRentalRate: 233,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "7",
    title: "file Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 8,
    dailyRentalRate: 9.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "8",
    title: "jeddah sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 16,
    dailyRentalRate: 42,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "9",
    title: "old Hard",
    genre: {
      _id: "1",
      name: "Action",
    },
    numberInStock: 42,
    dailyRentalRate: 16.5,
    publishDate: "2018-01-03T19:28.8092",
    liked: false,
  },
  {
    _id: "10",
    title: "layla sea",
    genre: {
      _id: "2",
      name: "Horror",
    },
    numberInStock: 71,
    dailyRentalRate: 3,
    publishDate: "2008-01-03T19:28.8092",
    liked: true,
  },
  {
    _id: "11",
    title: "green Hard",
    genre: {
      _id: "12",
      name: "Action",
    },
    numberInStock: 1,
    dailyRentalRate: 864.5,
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
    dailyRentalRate: 99,
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
    title: "hot sea",
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
