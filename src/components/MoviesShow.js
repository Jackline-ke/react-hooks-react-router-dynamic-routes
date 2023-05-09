// @flow strict

import * as React from 'react';
import { useParams } from "react-router-dom";

function MoviesShow({ movies }) {
  const params = useParams();
  console.log(params);
  
  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MoviesShow;