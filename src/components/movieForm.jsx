import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import { getMovie } from "../services/movieService";
import Form from "./common/form";

const MovieForm = () => {
  const params = useParams();
  const navigate = useNavigate();

  return <MovieFormC params={params} navigate={navigate} />;
};

class MovieFormC extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };

  // const moive = getMovie(id);
  // console.log(movie);

  // const handelSave = (e) => {
  //   e.preventDefault();
  //   navigate("/movies");
  // };

  titleSchema = Joi.string().email().required().label("Title");
  genreSchema = Joi.string().min(5).max(20).required().label("Genre");
  numberInStockSchema = Joi.number()
    .min(4)
    .max(20)
    .required()
    .label("Number In Stock");
  rateSchema = Joi.number().min(4).max(10).required().label("Rate");

  schema = Joi.object({
    title: this.titleSchema,
    genre: this.genreSchema,
    // name: this.nameSchema,
  });

  doSubmit = () => {
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
            {this.renderInput("genre", "Genere")}
            {this.renderInput("numberInStock", "Number in Stock")}
            {this.renderInput("rate", "Rate")}
            {this.renderButton("Save", { onClick: this.doSubmit })}
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
