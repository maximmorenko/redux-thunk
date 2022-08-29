// воспользуемся нашим клиентским АПИ
import { client } from "../../api";

export const ADD_TODOS = 'ADD_TODOS';

const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
})

export const loadTodos = () => (dispatch) => {
    // вызываем клиента и передаем ему адрес, а таже если есть боди и настройки конфига 
    // так как мы создали методы клиента, то здесь мы можем явно указать их
    client.get('https://jsonplaceholder.typicode.com/todos')
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => res.json())
    .then(data => dispatch(addTodos(data)))
    // достанем из кетча текст ошибки, который мы туда положили и распечатаем
    .catch(err => console.error(err))
}
