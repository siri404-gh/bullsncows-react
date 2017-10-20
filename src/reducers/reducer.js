import { combineReducers } from 'redux';
import wordsReducer from './words/wordsReducer';
import pointsReducer from './points/pointsReducer';
import theWordReducer from './theWord/theWordReducer';
import loginReducer from './login/loginReducer';
import loadingReducer from './loading/loadingReducer';
import userReducer from './user/userReducer';
import lastwordReducer from './lastword/lastwordRecucer';
import usersReducer from './users/usersReducer';
import levelReducer from './level/levelReducer';
import leaderboardReducer from './leaderboard/leaderboardReducer';

const reducer = combineReducers({
  login: loginReducer,
  words: wordsReducer,
  points: pointsReducer,
  theWord: theWordReducer,
  loading: loadingReducer,
  user: userReducer,
  lastword: lastwordReducer,
  users: usersReducer,
  level: levelReducer,
  leaderboard: leaderboardReducer,
});

export default reducer;
