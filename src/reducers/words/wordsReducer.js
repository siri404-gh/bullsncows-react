import initialState from '../../state';

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return {
        theWord: state.theWord,
        words: [...state.words, {id: action.id, word: action.word}],
      };
    case 'RESET_WORDS':
      return {
        theWord: state.theWord,
        words: [],
      };
    default:
      return state;
  }
};

export default wordsReducer;
