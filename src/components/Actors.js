import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsToDisplay = actors.map((actor)=> {
    const {name, movies} = actor;
    const moviesToDisplay = movies.map((movie)=> {
      return <li key={movie}>{movie}</li>
    })
    return (
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
    <h1>Actors Page</h1>
    {actorsToDisplay}
  </div>
  );
}

export default Actors;
