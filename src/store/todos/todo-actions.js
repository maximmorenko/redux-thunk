// воспользуемся нашим клиентским АПИ
import {client} from '../../api'

// так как разные типовые операции, типа SET_LOADING SET_ERROR, могут происходить на разных уровнях 
// добавим префикс todos, указывая что операция происходит здесь, в этом уровне. (собачки можно не добавлять @@)
export const ADD_TODOS = '@@todos/ADD_TODOS';
export const SET_LOADING = '@@todos/SET_LOADING';
export const SET_ERROR = '@@todos/SET_ERROR';
export const ADD_TODO = '@@todos/ADD_TODO';

const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
})

const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
})

const setLoading = () => ({
    type: SET_LOADING
})
  
const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

export const loadTodos = () => (dispatch) => {
    // перед тем как пойти на сервер за тудушками, вызывааем собитие загрузки, и инициируем его 
    dispatch(setLoading())

    // вызываем клиента и передаем ему адрес, а таже если есть боди и настройки конфига 
    // так как мы создали методы клиента, то здесь мы можем явно указать их
    client.get('https://jsonplaceholder.typicode.com/todos')
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => res.json())
    .then(data => dispatch(addTodos(data)))
    // если есть ошибка то вызываем событие ошибки инициируем его, передаем в него текст ошибки
    .catch(err => dispatch(setError(err)))
}

// для создания одного туду во внешнем коде создадим санк 
export const createTodo = (title) => (dispatch) => {
    // в тепвую очередь ждем тайтл
    // во вторую ждем dispatch

    // Обращаемся к клиенту с пост запросом
    client.post('https://jsonplaceholder.typicode.com/todos', {
        // передадим боди в качестве объекта
        title,
        complited: false,
        userId: 1,
    })
    // затем с сервера ждем новую тудушку (с идентификатором) 
    // и через диспач вызываем экшн ньюТуду и передаем в нее получпеную туду
    .then(newTodo => dispatch(addTodo(newTodo)))
    // если есть ошибка то вызываем событие ошибки инициируем его, передаем в него текст ошибки
    .catch(err => dispatch(setError(err)))
}
