
const wordsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [...state, {id: action.id, word: action.word}];
    case 'RESET_WORDS':
      return [];
    default:
      return state;
  }
};

export default wordsReducer;
