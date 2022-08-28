import {useSelector} from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos)

    return (
        <div>
            Todos: {todos.length}
        </div>
    )
}

export {TodoList};
