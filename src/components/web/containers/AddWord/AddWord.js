import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../actions/words/wordsActions';
import Styles from './AddWord.css';

const AddWord = ({ dispatch }) => {
  let input;
  return (
    <div className={Styles.addWord}>
      <form onSubmit={(e) => e.preventDefault()}>
       Make a Guess: <input ref={node => input = node} type="text" maxLength='7' autoFocus className={Styles.input}/>
        <button type="submit" className='btn btn-primary' onClick={() => {
          dispatch(addWord(input.value));
          input.value = '';
        }}>Submit</button>
      </form>
    </div>
  );
};

export default connect()(AddWord);
