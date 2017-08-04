import {combineReducers} from 'redux';
import wordsReducer from './words/wordsReducer';
import pointsReducer from './points/pointsReducer';
import theWordReducer from './theWord/theWordReducer';
import attemptsReducer from './attempts/attemptsReducer';

const reducer = combineReducers({
  words: wordsReducer,
  points: pointsReducer,
  theWord: theWordReducer,
  attempts: attemptsReducer
});

export default reducer;
