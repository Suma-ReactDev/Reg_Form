import {useUserContext} from './store/user-context'

const UserList = () => {
  const {users} = useUserContext();
  return (
    <div className='flex flex-col items-center justify-center
    min-h-screen mx-auto bg-slate-400 rounded'>
      
    </div>
  )
}

export default UserList