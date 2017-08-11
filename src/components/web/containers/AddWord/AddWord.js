import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../actions/words/wordsActions';
import Styles from './AddWord.less';

const AddWord = ({ theWord, add }) => {
  let input;
  return (
    <div className={Styles.addWord + ' col-xs-12'}>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (input.value === '') return false;
        add(input.value);
        input.value = '';
      }}>
        <div className="form-group">
          <div className='row'>
            <div className='col-xs-3 col-sm-2 col-md-3'><label htmlFor="usr" className={Styles.guessString}> Guess: </label></div>
            <div className='col-xs-9 col-sm-10 col-md-9'>
              <input type="text" id="usr" ref={node => input = node} type="text" maxLength={theWord.length} autoFocus className={'form-control ' + Styles.input} autoComplete="off" pattern="[a-z]+" title="Only lowercase allowed" />
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
