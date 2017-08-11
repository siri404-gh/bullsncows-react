import { combineReducers } from 'redux';
import wordsReducer from './words/wordsReducer';
import pointsReducer from './points/pointsReducer';
import theWordReducer from './theWord/theWordReducer';
import loginReducer from './login/loginReducer';
import loadingReducer from './loading/loadingReducer';
import userReducer from './user/userReducer';
import lastwordReducer from './lastword/lastwordRecucer';
import usersReducer from './users/usersReducer';

const reducer = combineReducers({
  login: loginReducer,
  words: wordsReducer,
  points: pointsReducer,
  theWord: theWordReducer,
  loading: loadingReducer,
  user: userReducer,
  lastword: lastwordReducer,
  users: usersReducer
});

export default reducer;
