import React from 'react';

export const Points = ({word, theWord, resetWords }) => {
  let bulls = 0;
  let cows = 0;
  word.split('').map((letter, i) => {
    if(letter === theWord[i]) bulls++;
    else if(theWord.indexOf(letter) > -1) cows++;
    if(bulls === 4) resetWords();
  });

  return (
    <span>Bulls: {bulls} Cows: {cows}</span>
  );
};
