import reducer from './theWordReducer';
import deepfreeze from 'deepfreeze';

describe("Testing theWordReducer", () => {
  it('Should add a new word upon triggering ADD_NEW_WORD', () => {
    const stateBefore = 'abcd';
    const action = {
      type: 'ADD_NEW_WORD'
    };
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).not.toEqual(stateBefore);
  });

  it('Should return initial state upon triggering ADD_NEW_WORD_WRONG', () => {
    const stateBefore = 'abcd';
    const action = {
      type: 'ADD_NEW_WORD_WRONG'
    };
    const stateAfter = 'abcd';
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

 it('Should return initial state upon triggering @@redux/INIT', () => {
    const stateBefore = 'abcd';
    const action = {
      type: '@@redux/INIT'
    };
    const stateAfter = 'abcd';
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

});
