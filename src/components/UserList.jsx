import {useSelector} from 'react-redux'

const UserList = () => {
  const users = useSelector(state => state.users)
  console.log('render user')

  return (
    <div>
      Users: {users.length}
    </div>
  )
}

export {UserList};