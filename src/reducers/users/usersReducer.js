
const usersReducer = (state = [{user: 'sreeram', points: 354}], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
