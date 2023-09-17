import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsToDisplay = directors.map((director)=> {
    const {name, movies} = director;
    const moviesToDisplay = movies.map((movie)=> {
      return <li key={movie}>{movie}</li>
    })
    return(
      <div key={name}>
        <h2>{name}</h2>
        <ul>
          {moviesToDisplay}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
      {directorsToDisplay}
  </div>
  );
}

export default Directors;
