import React, { useState } from "react";
import search from "../Photomy/search.png";
import MovieList from "../movieCard/MovieList";
import "./search.css";
// import MovieList from "../movieCard/MovieList";

const searchStyle = {
  width: "250px",
  height: "30px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: " 10px",
  marginLeft: "10px",
  marginBottom: "10px",
  cursor: "pointer",
  backgroundColor: "white",

  display: "none",
};

const Search = ({ searchValue, setSearchValue , setSpinner}) => {
  const [style, setStyle] = useState(searchStyle);

const handleChange = (e) => {
  setSearchValue(e.target.value);
  setSpinner(true)
}

  return (
    <div>
      
      <div className="search">
        <div className="image">
          <img
            src={search}
            alt=""
            onClick={() => {
              setStyle({ ...style, display: "block" });
            }}
          />{" "}
        </div>
        <div className="input">
          <input
            style={style}
            type="search"
            value={searchValue}
            onChange={handleChange}
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
