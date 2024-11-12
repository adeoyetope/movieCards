import React, { useState } from "react";
import "./addMovie.css";
import MovieList from "../movieCard/MovieList";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AddMovie = ({ setMovies , setDisplaySearch, setSpinner}) => {
  const [isLoaing, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState({
    title: "",
    image: "",
    discription: null,
    rating: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleChangeFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setMovieData({ ...movieData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const hanldeMovieSubmit = (e) => {
    e.preventDefault();
    setSpinner(false)
    setIsLoading(true); // Start loading
    setDisplaySearch(true)
    const date = new Date();
    const id = date.getTime();
    movieData.id = id;

    setTimeout(() => {
      setMovies((prevMovies) => [...prevMovies, movieData]);
      setMovieData("");
      setIsLoading(false); // Stop loading
      navigate("/"); // Redirect after loading completes
    }, 3000); // Simulate loading delay

    
  };

  console.log(movieData);

  return (
    <div className="addMovie">
      {isLoaing ? (
        <div className="loading-spinner">
          {/* <p>Loading...</p> */}
        </div> // Display loading animation
      ) : (
        <form onSubmit={hanldeMovieSubmit}>
          <input
            type="text"
            placeholder="you movie title"
            name="title"
            value={movieData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="movie rating"
            name="rating"
            value={movieData.rating}
            onChange={handleChange}
            required
          />
          <textarea
            rows={10}
            cols={10}
            name="discription"
            id="discription"
            placeholder="Discribe your movie here"
            type="text"
            value={movieData.discription}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="" style={{ marginTop: "10px", marginBottom: "-5px" }}>
            upload the movie background
          </label>
          <input
            type="file"
            placeholder="upload the movie background"
            name="image"
            value={movieData.file}
            onChange={handleChangeFile}
            required
          />
          <button>Add</button>
          {/* <Link to="/"> </Link> */}
        </form>
      )}
    </div>
  );
};

export default AddMovie;
