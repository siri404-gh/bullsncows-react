import React from 'react';
import { connect } from 'react-redux';
import { SingleWord } from '../../presentational/SingleWord/SingleWord';
import { Points } from '../../presentational/Points/Points';
import { resetWords } from '../../../../../actions/AddWord/AddWordActions';
import { updatePoints } from '../../../../../actions/points/PointsActions';

const WordList = ({ words, theWord, resetWords }) => {
  return (
    <div>
      {words.map((word) =>
        <div key={word.id}>
          <SingleWord
            word={word.word} />
          <Points
            word={word.word}
            theWord={theWord}
            resetWords={resetWords}/>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    words: state.words,
    theWord: state.theWord,
  };
};

const mapDispatchToProps = dispatch => ({
    resetWords: () => {
      dispatch(resetWords());
      dispatch(updatePoints());
    },
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList);
