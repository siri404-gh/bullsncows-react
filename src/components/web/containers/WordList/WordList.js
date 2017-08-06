import React from 'react';
import { connect } from 'react-redux';
import { SingleWord } from '../../presentational/SingleWord/SingleWord';
import { Points } from '../../presentational/Points/Points';
import { resetWords } from '../../../../actions/words/wordsActions';
import { updatePoints } from '../../../../actions/points/pointsActions';
import { addNewWord } from '../../../../actions/theWord/theWordActions';
import { addAttempt } from '../../../../actions/attempts/attemptsAction';
import Styles from './WordList.less';

const WordList = ({ words, theWord, resetWords }) => {
  return (
    <div className='col-xs-12'>
      <div className='col-xs-1 col-sm-3'>
      </div>
      <div className={Styles.WordList + ' col-xs-10 col-sm-6'}>
        <h6 className={Styles.center}> Your Guesses: </h6>
        {words.map((word) =>
          <div key={word.id}>
            <SingleWord
              word={word.word} />
            <Points
              word={word.word}
              theWord={theWord}
              length={words.length}
              resetWords={resetWords} />
          </div>
        )}
      </div>
      <div className='col-xs-1 col-sm-3'>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    words: state.words.reverse(),
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
