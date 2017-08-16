import React from 'react';
import { connect } from 'react-redux';
import { SingleWord } from '../../presentational/SingleWord/SingleWord';
import { Points } from '../../presentational/Points/Points';
import { resetWords } from '../../../../actions/words/wordsActions';
import { updatePoints } from '../../../../actions/points/pointsActions';
import { addNewWord } from '../../../../actions/theWord/theWordActions';
import { addLastWord } from '../../../../actions/lastword/lastwordActions';
import { getUsers } from '../../../../actions/users/usersActions';
import { setLevel } from '../../../../actions/level/levelActions';
import { gameUrl, wordType } from '../../../../../variables';

import Styles from './WordList.less';
const letterType = wordType === 'number' ? 'digit' : 'letter';

const WordList = ({ words, theWord, resetWords, userId, points, lastword, displayName }) => {
  var k = 'abcdefghijklmnopqrstuvwxyz';
  var j = '1234567890';
  const a = wordType === 'number' ? j.slice(0, theWord.length) : k.slice(0, theWord.length);
  return (
    <div className={Styles.WordList}>
      <div><h6 className={Styles.center + ' ' + Styles.bold}> Your Guesses </h6></div>
      <i>{words.length === 0 && "Start with a random guess. Try '" + a+"'"}</i>
      {words.map((word) =>
        <div key={word.id} className={Styles.wordPoints}>
          <div className='col-xs-5'>
            <SingleWord
              word={word.word} />
          </div>
          <div className='col-xs-7'>
            <Points
              word={word.word}
              theWord={theWord}
              length={words.length}
              resetWords={resetWords}
              userId={userId}
              points={points}
              lastword={lastword}
              displayName={displayName}/>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    words: state.words.sort((a, b) => b.id - a.id),
    theWord: state.theWord,
    userId: state.user.uid,
    points: state.points,
    lastword: state.lastword,
    displayName: state.user.displayName
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetWords: (num, userId, lastword, word, displayName) => {
    let level = Math.floor(num/500)+1;
    dispatch(resetWords());
    dispatch(updatePoints(num, userId, [...lastword, word], displayName, level));
    dispatch(setLevel(level));
    dispatch(addNewWord(level));
    dispatch(addLastWord(word));
    if( (lastword.length+1) % 3 === 0 ) {
      FB.ui({
        method: 'share',
        display: 'popup',
        href: gameUrl,
        quote: 'My score after solving ' + (lastword.length+1) + ' ' +wordType +'s: ' + num,
        picture: 'https://bullsncows-3d0f8.firebaseapp.com/889bff3b5c52e2d4e3010b5b853c7b2f.png',
        redirect_uri: gameUrl
      }, function(response){});
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList);
