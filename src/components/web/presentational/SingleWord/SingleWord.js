import React from 'react';
import Styles from './SingleWord.less';

export const SingleWord = ({ word }) => {
  return (
    <span className={Styles.singleWord}>{word}</span>
  );
};
