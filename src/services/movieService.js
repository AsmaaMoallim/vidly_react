import * as genresAPI from "./genreService";

// let movies = [
//   {
//     _id: "1",
//     title: "live Hard",
//     genre: {
//       _id: "1",
//       name: "Action",
//     },
//     numberInStock: 5,
//     dailyRentalRate: 2.5,
//     publishDate: "2018-01-03T19:28.8092",
//     liked: false,
//   },
//   {
//     _id: "2",
//     title: "tea sea",
//     genre: {
//       _id: "2",
//       name: "Horror",
//     },
//     numberInStock: 7,
//     dailyRentalRate: 4,
//     publishDate: "2008-01-03T19:28.8092",
//     liked: true,
//   },
//   {
//     _id: "3",
//     title: "bayader Hard",
//     genre: {
//       _id: "1",
//       name: "Action",
//     },
//     numberInStock: 34,
//     dailyRentalRate: 2.5,
//     publishDate: "2018-01-03T19:28.8092",
//     liked: false,
//   },
//   {
//     _id: "4",
//     title: "ahmar sea",
//     genre: {
//       _id: "2",
//       name: "Horror",
//     },
//     numberInStock: 77,
//     dailyRentalRate: 47,
//     publishDate: "2008-01-03T19:28.8092",
//     liked: true,
//   },
//   {
//     _id: "5",
//     title: "blue Hard",
//     genre: {
//       _id: "1",
//       name: "Action",
//     },
//     numberInStock: 98,
//     dailyRentalRate: 6.5,
//     publishDate: "2018-01-03T19:28.8092",
//     liked: false,
//   },
//   {
//     _id: "6",
//     title: "oman sea",
//     genre: {
//       _id: "2",
//       name: "Horror",
//     },
//     numberInStock: 0,
//     dailyRentalRate: 233,
//     publishDate: "2008-01-03T19:28.8092",
//     liked: true,
//   },
//   {
//     _id: "7",
//     title: "file Hard",
//     genre: {
//       _id: "1",
//       name: "Action",
//     },
//     numberInStock: 8,
//     dailyRentalRate: 9.5,
//     publishDate: "2018-01-03T19:28.8092",
//     liked: false,
//   },
//   {
//     _id: "8",
//     title: "jeddah sea",
//     genre: {
//       _id: "2",
//       name: "Horror",
//     },
//     numberInStock: 16,
//     dailyRentalRate: 42,
//     publishDate: "2008-01-03T19:28.8092",
//     liked: true,
//   },
//   {
//     _id: "9",
//     title: "old Hard",
//     genre: {
//       _id: "1",
//       name: "Action",
//     },
//     numberInStock: 42,
//     dailyRentalRate: 16.5,
//     publishDate: "2018-01-03T19:28.8092",
//     liked: false,
//   },
//   {
//     _id: "10",
//     title: "layla sea",
//     genre: {
//       _id: "2",
//       name: "Horror",
//     },
//     numberInStock: 71,
//     dailyRentalRate: 3,
//     publishDate: "2008-01-03T19:28.8092",
//     liked: true,
//   },
//   {
//     _id: "11",
//     title: "green Hard",
//     genre: {
//       _id: "12",
//       name: "Action",
//     },
//     numberInStock: 1,
//     dailyRentalRate: 864.5,
//     publishDate: "2018-01-03T19:28.8092",
//     liked: false,
//   },
//   {
//     _id: "13",
//     title: "Cold sea",
//     genre: {
//       _id: "2",
//       name: "Horror",
//     },
//     numberInStock: 7,
//     dailyRentalRate: 99,
//     publishDate: "2008-01-03T19:28.8092",
//     liked: true,
//   },
//   {
//     _id: "14",
//     title: "Die Hard",
//     genre: {
//       _id: "1",
//       name: "Action",
//     },
//     numberInStock: 5,
//     dailyRentalRate: 2.5,
//     publishDate: "2018-01-03T19:28.8092",
//     liked: false,
//   },
//   {
//     _id: "15",
//     title: "hot sea",
//     genre: {
//       _id: "2",
//       name: "Horror",
//     },
//     numberInStock: 7,
//     dailyRentalRate: 4,
//     publishDate: "2008-01-03T19:28.8092",
//     liked: true,
//   },
// ];

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
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

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreID);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
