## Redux Thunk 
- это промежуточное ПО (middlware), позволяющее вызывать создателей действий, которые возвращают функцию вместо объекта действия.
- С помощью Redux Thunk мы можем, на этапе мидлвейр, организовывать асинхронные запросы. 
- в зависимости от ответа от сервера вызываем соответствующий дополнительный экшн.
- например: закрузка, данные получены, ошибка и тд
- npm i redux-thunk

# Redux Thunk
- это функция которая НE возвращает объект события 
- вызывает внутри себя сдугие события
- имеет доступ к методам dispatch and getState

- const thunkExample = (data) => (dispatch, getState) => {

    dispatch(someAction());

    fetch('url')
        .then(res => res.json())
        .then(loaded => {
            dispatch(someOtherAction(loaded))
        })
}


## [API](https://jsonplaceholder.typicode.com/)

