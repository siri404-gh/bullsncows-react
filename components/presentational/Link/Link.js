import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

export const Link = ({ active, children, onFilterClick }) => {
    return active
    ? <span>{children}</span>
    : (
      <button onClick={_ => onFilterClick()}>{children}</button>
    );
};
