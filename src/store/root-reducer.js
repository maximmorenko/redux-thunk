import {combineReducers} from 'redux';

import {userReducer} from './users/user-reducer';
import {todosReducer} from './todos/todos-reducer'

export const rootReducer = combineReducers({
  users: userReducer,
  todos: todosReducer,
});