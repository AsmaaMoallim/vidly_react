import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handelSave = (e) => {
    e.preventDefault();
    navigate("/movies");
  };

  return (
    <div>
      <h1>Movie Form {id}</h1>
      <button onClick={handelSave} className="btn btn-primary mx-2">
        {" "}
        save{" "}
      </button>
    </div>
  );
};

export default MovieForm;
