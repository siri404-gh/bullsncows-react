const pointsReducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_POINTS':
      return state + (100 - action.points);
    default:
      return state;
  }
};

export default pointsReducer;
