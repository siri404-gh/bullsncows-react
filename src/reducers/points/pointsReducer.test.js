import reducer from './pointsReducer';
import deepfreeze from 'deepfreeze';

describe("Testing UPDATE_POINTS", () => {
  it('Should update points with given value', () => {
    const stateBefore = 0;
    const action = {
      type: 'UPDATE_POINTS',
      points: 8
    };
    const stateAfter = 92;
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
});
