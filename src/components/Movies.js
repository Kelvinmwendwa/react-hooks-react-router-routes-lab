import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h2>Movies</h2>
    { movies.map((movie, index) => {
      return <div key={ index }>
        <h2>Name: { movie.title }</h2>
        <p>Time { movie.time }</p>
        Genre : <ul>
          { movie.genres.map((genre) => {
            return <li key={ index }>{genre}</li>
          })}
        </ul>
      </div>
    })}
  </div>;
}

export default Movies;
