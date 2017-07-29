import reducer from './wordsReducer';
import deepfreeze from 'deepfreeze';

describe("Testing ADD_WORD", () => {
  it('Should add a word', () => {
    const stateBefore = {
      theWord: 'abcde',
      words: [],
    };

    const action = {
      id: 0,
      type: 'ADD_WORD',
      word: 'test',
    };

    const stateAfter = {
      theWord: 'abcde',
      words: [{
        id: 0,
        word: 'test',
      }]
    };

    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);

  });
});

describe("Testing RESET_WORDS", () => {
  it('Should reset all words', () => {
    const stateBefore = {
      theWord: 'abcde',
      words: [{
        id: 0,
        word: 'test',
      }],
    };

    const action = {
      type: 'RESET_WORDS',
    };

    const stateAfter = {
      theWord: 'abcde',
      words: []
    };

    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);

  });
});
