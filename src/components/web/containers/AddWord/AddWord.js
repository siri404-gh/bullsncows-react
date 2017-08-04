import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../actions/words/wordsActions';
import Styles from './AddWord.less';

const AddWord = ({ theWord, add }) => {
  let input;
  return (
    <div className={Styles.addWord}>
      <form onSubmit={(e) => e.preventDefault()}>
        Make a Guess: <input ref={node => input = node} type="text" maxLength={theWord.length} autoFocus className={Styles.input} />
        <button type="submit" className='btn btn-secondary' onClick={() => {
          add(input.value);
          input.value = '';
        }}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theWord: state.theWord,
  };
};

const mapDispatchToProps = (dispatch) => ({
  add: (word) => {
    dispatch(addWord(word));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWord);
