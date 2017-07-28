import React from 'react';
import FilterLink from '../../containers/FilterLink/FilterLink';

export const Footer = () => (
  <p>
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    <FilterLink filter='SHOW_DONE'>Done</FilterLink>
    <FilterLink filter='SHOW_NOT_DONE'>Active</FilterLink>
  </p>
);