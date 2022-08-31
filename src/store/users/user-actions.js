export const ADD_USERS = 'ADD_USERS';

// Будем получать лузеров с сервера и добавлять к себе в стор
const addUsers = (users) => ({
    // создадим событие с типом ADD_USERS
    type: ADD_USERS,
    // и передаем полученых лузеров через пэйлоад
    payload: users,
})

// воспользуемся thank для получения лузеров
export const loadUsers = () => (dispatch, _, client) => {
    // второй параметр пустой, а третим передаем клиент
    client.get('https://jsonplaceholder.typicode.com/users')
        .then(data => dispatch(addUsers(data))) // передаем полученый json в экшн при помощи dispatch
}
// как только случится это событие, оно попадет в редюсер и обработается (асинхронная операция)
