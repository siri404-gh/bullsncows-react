import initialState from '../../state';

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POINTS':
      return {
        theWord: state.theWord,
        words: [...state.words, {id: action.id, word: action.word}],
      };
    default:
      return state;
  }
};

export default wordsReducer;
