import React from 'react';
import AddTodo from '../containers/AddTodo/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList/VisibleTodoList';
import { Footer } from '../presentational/Footer/Footer';
import Styles from './TodoApp.css';

export const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
