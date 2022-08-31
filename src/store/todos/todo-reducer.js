import { ADD_TODOS, ADD_TODO, SET_ERROR, SET_LOADING } from './todo-actions';

const initialState = {
    status: 'idle',
    list: [], // теперь туду будем даставать по ключу list (в компоненте TodoList)
    error: null,
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
        return {
            ...state,
            list: [...state.list, action.payload], //разворачиваем имеющийся массив и добавляем новое туду
            status: 'fullfied' // загрузка случилась, статус фулфилд
        };
        case ADD_TODOS: 
        return {
            ...state,
            list: action.payload,
            status: 'fullfied' // загрузка случилась, статус фулфилд
        };
        case SET_LOADING:
        return {
            ...state,
            status: 'loading', // загрузка идет, статус лоадин
            error: null, // при повторной загрузке обнуляем ошибку
        }
        case SET_ERROR:
        return {
            ...state,
            status: 'rejected', // ошибка загрузки, статус реджект
            error: action.payload // теперь ошибка не null а то, что есть в пейлоаде
        }
        default:
        return state;
    }
}
