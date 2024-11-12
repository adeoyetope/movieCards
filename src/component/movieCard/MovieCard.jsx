// import MovieList from "./MovieList";
import React from "react";
import "./movie.css";
import { Link, Navigate } from "react-router-dom";
import AddMovie from "../addMovie/AddMovie";

const MovieCard = ({ title, description, image, rating, setDisplaySearch , spinner, setSpinner }) => {
  return (
    <div className="cardContianer">
      
      <div className="detail">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="desription">
          <h2 className="title">{title}</h2>
          <div className="discriptionAdd">
            <div>
              <p className="discription">{description}</p>
              <p className="rating">Rating: {rating}</p>
            </div>

            <div>
              <Link to="addMovie">
                <button onClick={() => setDisplaySearch(false)}>
                  ADD MOVIE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
