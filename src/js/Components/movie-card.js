import React from "react";
import PropTypes from "prop-types";
import Icon from "../Components/icon";
import MovieImage from "./movieImage";
import politician from "../../img/politician.jpg"

export default function MovieCard(props) {
  return (
    <>
      <div className="card">
        <MovieImage src={props.src} title={props.title} />
        <div className="card-info">
          <div className="card-title">{props.title}</div>
          <div className="card-date">{props.releasedate}</div>
          <div className="card-genre">{props.genre}</div>
        </div>
        <Icon className="card-icon" text="..."/>
      </div>
    </>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releasedate: PropTypes.string.isRequired,
}
MovieCard.defaultProps = {
  title: "Super Movie",
  description: "Missing description",
  genre: "just good movie",
  releasedate: "year missing",
}
