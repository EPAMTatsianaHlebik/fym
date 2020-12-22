import React from "react";
import PropTypes from "prop-types";

export default function AssistiveText(props) {
  return (
    <>
    {props.children.length > 0 &&
      <span className="assistive-text">
        {props.children}
    </span>
    }
    </>
  )
}

AssistiveText.propTypes = {
  children: PropTypes.string
}
AssistiveText.defaultProps = {
  children: ''
}
