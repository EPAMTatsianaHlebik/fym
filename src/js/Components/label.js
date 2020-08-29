import React from "react";
import PropTypes from "prop-types";

export default function Label(props) {
  return (
    <>
      <label htmlFor={props.for}>
        <h1>{props.title}</h1>
      </label>
    </>
  )
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  for: PropTypes.string.isRequired
}
Label.defaultProps = {
  title: "Missing text",
  for: "Missing for"
}
