import React from 'react';
import { Text } from 'react-native';
import base64 from 'base-64';

export const Points = ({word, theWord, length, resetWords }) => {
  let bulls = 0;
  let cows = 0;
  theWord = base64.decode(theWord);
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
