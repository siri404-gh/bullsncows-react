
const usersReducer = (state = [{user: 'qwerty', displayName: 'Sree Ram', points: 0}], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
