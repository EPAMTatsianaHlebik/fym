import React from "react";
import PropTypes from "prop-types";

export default function MovieImage(props) {
  return (
    <>
      <img src={props.src} alt={props.title+' image'} />
    </>
  )
}


Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
Image.defaultProps = {
  src: "Missing text",
  title: "Add alt here"
}
