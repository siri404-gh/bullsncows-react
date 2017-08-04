import reducer from './attemptsReducer';
import deepfreeze from 'deepfreeze';

describe('Testing Attempts reducer', () => {
  it('Should add up number of attempts by 1', () => {
    const stateBefore = 0;
    const action = {
      type: 'ADD_ATTEMPT'
    };
    const stateAfter = 1;
    deepfreeze(stateBefore);
    deepfreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
});
