import { ADD_USERS } from './user-actions';

export const userReducer = (state = [], action) => {
    // редюсер всегда принимает стейт и экшн.
    

    switch(action.type) {
        case ADD_USERS: 
            return action.payload; //при событии ADD_USERS возвращаем лузеров из пэйлоада
        default:
            return state;
    }
}
