import { combineReducers } from "redux";
import todos from './reducers/todos/todosReducer';
import visibilityFilter from './reducers/visibilityFilter/visibilityFilterReducer';

const reducer = combineReducers({
  todos,
  visibilityFilter
});

export default reducer;
