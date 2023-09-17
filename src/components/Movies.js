import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToDisplay = movies.map((movie)=> {
    const {title, time, genres} = movie;
    const genresToDisplay = genres.map((genre)=> {
      return <li key={genre}>{genre}</li>
    })
    return (
      <div key={title}>
        <h2>{title}</h2>
        <p>{time}</p>
        <ul>
          {genresToDisplay}
        </ul>
      </div>
    )
})
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesToDisplay}
  </div>
  );
}

export default Movies;
