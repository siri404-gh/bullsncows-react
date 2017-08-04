const attemptsReducer = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_ATTEMPT':
      return state+1;
    default:
      return state;
  }
};

export default attemptsReducer;
