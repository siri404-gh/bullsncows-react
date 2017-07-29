import React from 'react';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';
import Styles from './App.css';

export const App = () => (
  <div>
    <AddWord />
    <WordList/>
    <TotalPoints/>
  </div>
);
