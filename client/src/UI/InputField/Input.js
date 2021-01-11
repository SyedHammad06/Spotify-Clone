import React from 'react';

const input = (props) => (
  <React.Fragment>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      autoFocus={props.focus}
    />
  </React.Fragment>
);

export default input;
