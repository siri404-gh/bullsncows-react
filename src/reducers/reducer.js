import {combineReducers} from 'redux';
import wordsReducer from './words/wordsReducer';
import pointsReducer from './points/pointsReducer';
import theWordReducer from './theWord/theWordReducer';

const reducer = combineReducers({
  words: wordsReducer,
  points: pointsReducer,
  theWord: theWordReducer,
});

export default reducer;
