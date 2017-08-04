import word from '../words';
var w = word();
const theWordReducer = (state = w, action) => {
  switch (action.type) {
    case 'ADD_NEW_WORD':
      return word();
    default:
      return w;
  }
};

export default theWordReducer;
