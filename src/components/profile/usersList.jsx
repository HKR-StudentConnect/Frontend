import React from 'react'
import UserCardLg from '../user/userCardLg'

const UsersList = ({ users }) => {
  return (
    <div className='w-1/2 m-auto flex flex-col space-y-2'>
      {users.map(user => (
        <UserCardLg user={user} />
      ))}
    </div>
  )
}

export default UsersList
