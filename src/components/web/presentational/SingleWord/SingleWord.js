import React from 'react';
import Styles from './SingleWord.css';

export const SingleWord = ({ word }) => {
  return (
    <span className={Styles.singleWord}>{word}</span>
  );
};
