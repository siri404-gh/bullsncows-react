import React from 'react';
import {connect} from 'react-redux';
import {SingleWord} from '../../presentational/SingleWord/SingleWord';
import {Points} from '../../presentational/Points/Points';
import {resetWords} from '../../../../actions/words/wordsActions';
import {updatePoints} from '../../../../actions/points/pointsActions';
import {addNewWord} from '../../../../actions/theWord/theWordActions';
import { addAttempt } from '../../../../actions/attempts/attemptsAction';
import Styles from './WordList.less';

const WordList = ({words, theWord, resetWords}) => {
  return (
    <div className={Styles.WordList}>
      <h6 className={Styles.center}> Your Guesses: </h6>
    <ol>
      {words.map((word) =>
        <li key={word.id}>
          <SingleWord
            word={word.word} />
          <Points
            word={word.word}
            theWord={theWord}
            length={words.length}
            resetWords={resetWords} />
        </li>
      )}
    </ol>
    </div>
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
    dispatch(addAttempt());
    dispatch(addNewWord());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList);
