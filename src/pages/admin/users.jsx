import React, { useEffect, useState } from 'react'
import AdminPageLayout from '../../layouts/adminPageLayout'
import { getAllUsers, suspendUser, unsuspendUser } from '../../api/admin'

const AdminUserList = () => {
  const [users, setUsers] = useState(null)

  async function fetchUsers() {
    const response = await getAllUsers()
    console.log(response.data)
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
    <AdminPageLayout title={'Users'}>
      <div className='container mx-auto p-4'>
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
                      className='text-gray font-semibold'
                      onClick={() => onUnsuspend(user._id)}
                    >
                      Unsuspend
                    </button>
                  ) : (
                    <button
                      className='text-red font-semibold'
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
      </div>
    </AdminPageLayout>
  )
}

export default AdminUserList
