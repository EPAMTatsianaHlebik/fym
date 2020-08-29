import React from "react";
import MovieList from "./movie-list";

function MovieListErrorBoundery (props) {
  const SorryText = () => (
    <h2>
      Something went wrong... We are sorry and doing our best to fix the issue.
    </h2>
  )
  // const isEverythingOk = downloadMovies();
  let isEverythingOk = true;

  return <>{isEverythingOk ? props.children : <SorryText />}</>
}

export default MovieListErrorBoundery;
