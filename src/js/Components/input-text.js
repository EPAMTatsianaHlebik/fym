import React from "react";
import PropTypes from "prop-types";

export default function InputText(props) {
  return (
    <>
      <input type="text" id={props.id} placeholder={props.placeholder} />
    </>
  )
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
InputText.defaultProps = {
  id: "missing id",
  placeholder: "missing placeholder"
}
