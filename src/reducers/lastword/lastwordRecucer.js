const lastwordReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_LAST_WORD':
      return action.data;
    default:
      return state;
  }
};

export default lastwordReducer;
