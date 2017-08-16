const levelReducer = (state = 1, action) => {
  switch(action.type) {
    case 'SET_LEVEL':
      return action.level;
    default:
      return state;
  }
};

export default levelReducer;
