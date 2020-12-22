import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import AssistiveText from "./assistive-text";

export default function Button(props) {

  const classes = classnames (
    'btn',
    props.className,
    props.active
  );

  return (

    <button 
      className = {classes}
      disabled = {props.disabled}
      onClick = {props.onClick}
    >
      <AssistiveText>{props.assistiveText}</AssistiveText>  
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
}

Button.defaultProps = {
  children: "Default Button",
  onClick: () => {},
  className: '',
  assistiveText: '',
  disabled: false,
  active: false
}
