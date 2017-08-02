import reducer from './wordsReducer';
import deepfreeze from 'deepfreeze';

describe("Testing ADD_WORD", () => {
  it('Should add a word', () => {
    const stateBefore = [];
    const action = {
      id: 0,
      type: 'ADD_WORD',
      word: 'test',
    };
    const stateAfter = [{
        id: 0,
        word: 'test',
      }];
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
});

describe("Testing RESET_WORDS", () => {
  it('Should reset all words', () => {
    const stateBefore = [{
        id: 0,
        word: 'test',
      }];
    const action = {
      type: 'RESET_WORDS',
    };
    const stateAfter = [];
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
});
