import reducer from './theWordReducer';
import deepfreeze from 'deepfreeze';

describe("Testing ADD_NEW_WORD", () => {
  it('Should add a new word', () => {
    const stateBefore = 'abcd';
    const action = {
      type: 'ADD_NEW_WORD'
    };
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).not.toEqual(stateBefore);
  });
});
