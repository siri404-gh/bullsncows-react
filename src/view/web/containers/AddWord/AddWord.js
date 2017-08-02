import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../actions/words/wordsActions';

const AddWord = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input ref={node => input = node} type="text" maxLength='4' />
        <button onClick={() => {
          dispatch(addWord(input.value));
          input.value = '';
        }}>+</button>
      </form>
    </div>
  );
};

export default connect()(AddWord);
