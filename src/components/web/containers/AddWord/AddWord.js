import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../actions/words/wordsActions';
import Styles from './AddWord.less';

const AddWord = ({ theWord, add }) => {
  let input;
  return (
    <div className='col-xs-12'>
      <div className='col-sm-1 col-md-2'>
      </div>
      <div className={Styles.addWord + ' col-sm-10 col-xs-12 col-md-8'}>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (input.value === '') return false;
          add(input.value);
          input.value = '';
        }}>
          <div className="form-group">
            <label htmlFor="usr">Guess:</label>
            <input type="text" id="usr" ref={node => input = node} type="text" maxLength={theWord.length} autoFocus className={'form-control ' + Styles.input} autoComplete="off" pattern="[a-z]+" title="Only lowercase allowed" />
            {/* <button type="submit" className='btn btn-secondary' onClick={() => {
              if (input.value === '') return false;
              add(input.value);
              input.value = '';
            }}>Submit</button> */}
          </div>
        </form>
      </div>
      <div className='col-sm-1 col-md-2'>
      </div>
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
