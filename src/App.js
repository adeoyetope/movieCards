import { useState } from "react";
import "./App.css";
import AddMovie from "./component/addMovie/AddMovie";
import MovieCard from "./component/movieCard/MovieCard";
import MovieList from "./component/movieCard/MovieList";
import Search from "./component/search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./component/spinner/Spinner";

function App() {
  const [moviess, setMovies] = useState(MovieList);
  const [searchValue, setSearchValue] = useState("");
  const [displaySearch, setDisplaySearch] = useState(true);
  const [spinner, setSpinner] = useState(true);

  const filteredMovie = moviess.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const movies = filteredMovie.map((movieList) => (
    <MovieCard
      key={movieList.id}
      title={movieList.title}
      rating={movieList.rating}
      image={movieList.image}
      description={movieList.description}
      setDisplaySearch={setDisplaySearch}
      setSpinner={setSpinner}
      spinner={spinner}
    />
  ));

  console.log(moviess);
  return (
    <div>
   {/* {spinner ?  <Spinner setSpinner={setSpinner}/> :  null} */}
       {displaySearch ? (
        <Search searchValue={searchValue} setSearchValue={setSearchValue} setSpinner={setSpinner}/>
      ) : null} 

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<div className="container"> {spinner? <Spinner setSpinner={setSpinner}/> : movies}</div>}
          />
          <Route
            path="/"
            element={<div className="container"> {movies}</div>}
          />
          <Route
            path="/addMovie"
            element={
              <AddMovie
                moviess={moviess}
                setMovies={setMovies}
                setDisplaySearch={setDisplaySearch}
                setSpinner={setSpinner}
              />
            }
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
