import React from "react";
import MovieList from "./movie-list";

function ImageErrorBoundery (props) {
  const SorryText = () => (
    <h2>
      Something went wrong... We are sorry and doing our best to fix the issue.
    </h2>
  )
    // const isEverythingOk = downloadMovies();
    // let isEverythingOk = true;
    let isLoading = true;

  return <>{isLoading ? props.children : <SorryText />}</>
}

export default MovieListErrorBoundery;
