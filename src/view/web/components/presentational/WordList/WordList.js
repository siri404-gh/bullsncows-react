import React from 'react';
import {SingleWord} from '../SingleWord/SingleWord';
import {Points} from '../Points/Points';

export const WordList = ({words, theWord}) => {
  return (
    <div>
      {words.map((word) => {
        <SingleWord
          key={word.id}
          word={word.word} />;
      }
      )}
    </div>
  );
};
