const leaderboardReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LEADERBOARD':
      return action.show;
    default:
      return state;
  }
};

export default leaderboardReducer;
