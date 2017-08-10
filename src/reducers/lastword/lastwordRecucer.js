const lastwordReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LAST_WORD':
      return [...state, action.data];
    case 'ADD_ALL_WORDS':
      return action.words;
    default:
      return state;
  }
};

export default lastwordReducer;
