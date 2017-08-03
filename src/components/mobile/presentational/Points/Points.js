import React from 'react';
import { Text } from 'react-native';

export const Points = ({word, theWord, length, resetWords }) => {
  let bulls = 0;
  let cows = 0;
  word.split('').map((letter, i) => {
    if(letter === theWord[i]) bulls++;
    else if(theWord.indexOf(letter) > -1) cows++;
    if(bulls === 4) {
      resetWords(length);
    }
  });

  return (
    <Text> Bulls: {bulls} Cows: {cows}</Text>
  );
};
