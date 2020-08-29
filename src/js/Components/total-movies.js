import React from "react";
import PropTypes from "prop-types";

export default function TotalMovies(props) {
  return (
    <>
      <div><strong>{props.amount}</strong> {props.text}</div>
    </>
  )
}

TotalMovies.propTypes = {
  amount: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}
TotalMovies.defaultProps = {
  amount: "count fail",
  text: "Missing text"
}
