import { combineReducers } from 'redux';
import wordsReducer from './words/wordsReducer';
import pointsReducer from './points/pointsReducer';
import theWordReducer from './theWord/theWordReducer';
import attemptsReducer from './attempts/attemptsReducer';
import loginReducer from './login/loginReducer';
import loadingReducer from './loading/loadingReducer';
import userReducer from './user/userReducer';

const reducer = combineReducers({
  login: loginReducer,
  words: wordsReducer,
  points: pointsReducer,
  theWord: theWordReducer,
  attempts: attemptsReducer,
  loading: loadingReducer,
  user: userReducer
});

export default reducer;
