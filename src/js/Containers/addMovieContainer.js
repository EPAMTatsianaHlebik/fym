import React from "react";
import MovieList from "./movie-list";

function AddMovieContainer (props) {
  // const isEverythingOk = downloadMovies();
  let isEverythingOk = true;

  return <>{isEverythingOk ? props.children : <SorryText />}</>
}

export default AddMovieContainer;
