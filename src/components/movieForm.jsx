import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "../services/movieService";
import Form from "./common/form";
import { getGenres } from "../services/genreService";

const MovieForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  // console.log(getMovie(params.id));

  return <MovieFormC params={params} navigate={navigate} />;
};

class MovieFormC extends Form {
  state = {
    data: { title: "", genreID: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  // fetchMovie = () => {
  //   const { id } = this.props.params;
  //   if (!id) return;

  //   const movie = getMovie(id);
  //   if (!movie) {
  //     this.props.navigate("/notfound");
  //   } else {
  //     this.setState({
  //       data: {
  //         title: movie.title,
  //         genre: movie.genre.name,
  //         numberInStock: movie.numberInStock,
  //         rate: movie.dailyRentalRate,
  //       },
  //     });
  //   }
  //   return;
  // };

  // const moive = getMovie(id);
  // console.log(movie);

  // const handelSave = (e) => {
  //   e.preventDefault();
  //   navigate("/movies");
  // };

  titleSchema = Joi.string().required().label("Title");
  genreIDSchema = Joi.string().required().label("Genre");
  numberInStockSchema = Joi.number()
    .min(0)
    .max(100)
    .required()
    .label("Number In Stock");
  dailyRentalRateSchema = Joi.number()
    .min(0)
    .max(10)
    .required()
    .label("Daily Rental Rate");

  schema = Joi.object({
    _id: Joi.string(),
    title: this.titleSchema,
    genreID: this.genreIDSchema,
    numberInStock: this.numberInStockSchema,
    dailyRentalRate: this.dailyRentalRateSchema,
  });

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.navigate("/notfound", { replace: true });

    this.setState({ data: this.mapToViewModel(movie) });

    // this.fetchMovie();
  }

  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreID: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  doSubmit = () => {
    saveMovie(this.state.data);
    // e.preventDefault();
    this.props.navigate("/movies");
  };

  render() {
    return (
      <div>
        <div className="form_page">
          <h1>Movie Form {this.props.params.id}</h1>
          <form onSubmit={this.handelSubmit} action="" className="mt-4">
            {this.renderInput("title", "Title", { autoFocus: true })}
            {this.renderSelect("genreID", "Genere", this.state.genres)}
            {this.renderInput("numberInStock", "Number in Stock", {
              type: "number",
            })}
            {this.renderInput("dailyRentalRate", "Rate")}
            {this.renderButton("Save")}
          </form>
        </div>
        {/* <button onClick={handelSave} className="btn btn-primary mx-2">
          {" "}
          save{" "}
        </button> */}
      </div>
    );
  }
}

export default MovieForm;
