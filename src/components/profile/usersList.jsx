import React from 'react'
import UserCardLg from '../user/userCardLg'

const UsersList = ({ users }) => {
  return (
    <div className='w-full lg:w-1/2 m-auto flex flex-col space-y-2'>
      {users.map(user => (
        <UserCardLg key={user._id} user={user} />
      ))}
    </div>
  )
}

export default UsersList
