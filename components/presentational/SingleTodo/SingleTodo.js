import React from 'react';

export const SingleTodo = ({ onTodoClick, done, task }) => {
  return (
    <li onClick={onTodoClick} style={{ textDecoration: done ? 'line-through' : 'none' }}>{task}</li>
  );
};
