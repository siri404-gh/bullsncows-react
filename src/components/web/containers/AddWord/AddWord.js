import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../actions/words/wordsActions';
import Styles from './AddWord.less';

const AddWord = ({ theWord, add, words }) => {
  let input;

  const populate = () => {
    // console.log(words.pop());
  }

  return (
    <div className={Styles.addWord + ' col-xs-12'}>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (input.value === '') return false;
        add(input.value);
        input.value = '';
      }}>
        <div className="form-group">
          <div>
            <div className='col-xs-4 col-sm-2 col-md-3'><label htmlFor="usr" className={Styles.guessString}> Guess: </label></div>
            <div className='col-xs-8 col-sm-10 col-md-9'>
              <input type="text" id="usr" ref={node => input = node} type="text" maxLength={theWord.length} onKeyDown={populate} autoFocus className={'form-control ' + Styles.input} autoComplete="off" autoCorrect="off" autoCapitalize="none"/>
            </div>
            {/* <button type="submit" className='btn btn-secondary' onClick={() => {
              if (input.value === '') return false;
              add(input.value);
              input.value = '';
            }}>Submit</button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theWord: state.theWord,
    words: state.words
  };
};

const mapDispatchToProps = (dispatch) => ({
  add: (word) => {
    dispatch(addWord(word.toLowerCase()));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWord);
