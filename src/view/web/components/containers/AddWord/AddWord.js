import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../../actions/AddWord/AddWordActions';

const AddWord = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => input = node} type="text" maxLength='4'/>
      <button onClick={() => {
        dispatch(addWord(input.value));
        input.value = '';
      }}>+</button>
    </div>
  );
};

export default connect()(AddWord);
