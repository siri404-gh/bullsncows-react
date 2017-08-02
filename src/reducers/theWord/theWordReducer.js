import word from '../words';

const theWordReducer = (state = word(), action) => {
  switch (action.type) {
    case 'ADD_NEW_WORD':
      return word();
    default:
      return state;
  }
};

export default theWordReducer;
