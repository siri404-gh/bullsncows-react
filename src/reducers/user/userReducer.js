
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return action.data;
    default:
      return state;
  }
};

export default userReducer;