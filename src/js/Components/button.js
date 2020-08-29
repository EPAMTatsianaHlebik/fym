import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <>
      <button className={props.className}>{props.text}</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
Button.defaultProps = {
  text: "Missing text"
}
