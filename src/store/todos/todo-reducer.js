import { ADD_TODOS } from './todo-actions';

export const todoReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODOS: 
            return action.payload;
        default:
            return state;
    }
}
