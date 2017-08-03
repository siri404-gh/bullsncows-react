import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SingleWord } from '../../presentational/SingleWord/SingleWord';
import { Points } from '../../presentational/Points/Points';
import { resetWords } from '../../../../actions/words/wordsActions';
import { updatePoints } from '../../../../actions/points/pointsActions';
import { addNewWord } from '../../../../actions/theWord/theWordActions';

const WordList = ({ words, theWord, resetWords }) => {
  return (
    <View>
      {words.map((word, i) =>
      <View key={i}>
        <SingleWord
          word={word.word} />
        <Points
          word={word.word}
          theWord={theWord}
          length={words.length}
          resetWords={resetWords} />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    words: state.words,
    theWord: state.theWord,
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetWords: (num) => {
    dispatch(resetWords());
    dispatch(updatePoints(num));
    dispatch(addNewWord());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList);
