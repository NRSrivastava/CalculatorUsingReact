import React from 'react';

const Button = (props) => {
  return (
    <input
      type="button"
      value={props.label}
      style={props.style}
      onClick = {props.handleClick}
    />
  );
}

export default Button;