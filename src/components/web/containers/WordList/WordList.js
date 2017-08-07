import React from 'react';
import { connect } from 'react-redux';
import { SingleWord } from '../../presentational/SingleWord/SingleWord';
import { Points } from '../../presentational/Points/Points';
import { resetWords } from '../../../../actions/words/wordsActions';
import { updatePoints } from '../../../../actions/points/pointsActions';
import { addNewWord } from '../../../../actions/theWord/theWordActions';
import { addLastWord } from '../../../../actions/lastword/lastwordActions';
import Styles from './WordList.less';

const WordList = ({ words, theWord, resetWords, userId }) => {
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
              resetWords={resetWords}
              userId={userId} />
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
    words: state.words.sort((a, b) => b.id - a.id),
    theWord: state.theWord,
    userId: state.user.uid
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetWords: (num, userId, word) => {
    dispatch(resetWords());
    dispatch(updatePoints(num, userId, word));
    dispatch(addNewWord());
    dispatch(addLastWord(word));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList);
