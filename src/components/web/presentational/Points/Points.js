import React from 'react';
import Styles from './Points.less';

export const Points = ({word, theWord, length, resetWords, userId, points, lastword, displayName }) => {
  let bulls = 0;
  let cows = 0;
  word.split('').map((letter, i) => {
    if(letter === theWord[i]) bulls++;
    else if(theWord.indexOf(letter) > -1) cows++;
    if(bulls === theWord.length) resetWords(points+100-length, userId, lastword, word, displayName);
  });

  return (
    <div>
      <div className='col-xs-6'><span className={cows > 0 || bulls > 0 ? Styles.green : Styles.normal}> {bulls} </span></div>
      <div className='col-xs-6'><span className={cows > 0 || bulls > 0 ? Styles.green : Styles.normal}> {cows} </span></div>
    </div>
  );
};
