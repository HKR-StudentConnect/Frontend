import React, { useEffect, useState } from 'react'
import { getAllUsers, suspendUser, unsuspendUser } from '../../api/admin'

const AdminUsersList = () => {
  const [users, setUsers] = useState(null)

  async function fetchUsers() {
    const response = await getAllUsers()
    if (response.status === 200) {
      setUsers(response.data)
    }
  }

  useEffect(() => {
    fetchUsers()
  })

  const onSuspend = async userId => {
    const response = await suspendUser(userId)
    console.log(response)
    if (response.status === 200) {
      fetchUsers()
    }
  }

  const onUnsuspend = async userId => {
    const response = await unsuspendUser(userId)
    console.log(response)
    if (response.status === 200) {
      fetchUsers()
    }
  }

  if (!users) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
      <div>
        <dl>
          <div className='bg-background px-4 py-5 border-b border-gray sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-semibold'>Name</dt>
            <dd className='text-sm font-semibold'>Username</dd>
            <dd className='text-sm font-semibold'>Email</dd>
          </div>
          {users.map((user, index) => (
            <div
              key={index}
              className='bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'
            >
              <dt className='text-sm text-gray-900'>{user.profile.name}</dt>
              <dd className='mt-1 text-sm sm:mt-0'>@{user.username}</dd>
              <dd className='mt-1 text-sm sm:mt-0'>{user.email}</dd>
              {user.suspended ? (
                <button
                  className='text-gray font-semibold hover:text-black'
                  onClick={() => onUnsuspend(user._id)}
                >
                  Unsuspend
                </button>
              ) : (
                <button
                  className='text-red font-semibold hover:text-gray'
                  onClick={() => onSuspend(user._id)}
                >
                  Suspend
                </button>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default AdminUsersList
