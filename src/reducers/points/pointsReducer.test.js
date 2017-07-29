import reducer from './pointsReducer';
import deepfreeze from 'deepfreeze';

describe("Testing UPDATE_POINTS", () => {
  it('Should update given points', () => {
    const stateBefore = {
      points: 0,
    };

    const action = {
      id: 0,
      type: 'UPDATE_POINTS',
      value: 10,
    };

    const stateAfter = {
      points: 10,
    };

    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);

  });
});
