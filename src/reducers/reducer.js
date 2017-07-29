import {combineReducers} from 'redux';
import wordsReducer from './words/wordsReducer';

const reducer = combineReducers({
  wordsReducer,
});

export default wordsReducer;
