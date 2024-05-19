import React from 'react'
import AdminPageLayout from '../../layouts/adminPageLayout'

const users = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin',
  },
  {
    name: 'Tom Cook',
    title: 'Director of Product',
    email: 'tom.cook@example.com',
    role: 'Member',
  },
  {
    name: 'Whitney Francis',
    title: 'Copywriter',
    email: 'whitney.francis@example.com',
    role: 'Admin',
  },
  {
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    email: 'leonard.krasner@example.com',
    role: 'Owner',
  },
  {
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'floyd.miles@example.com',
    role: 'Member',
  },
]

const AdminUserList = () => {
  const onSuspend = () => {}

  return (
    <AdminPageLayout title={'Users'}>
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Users</h2>
          <button className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700'>
            Add user
          </button>
        </div>
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
                  <dt className='text-sm text-gray-900'>{user.name}</dt>
                  <dd className='mt-1 text-sm sm:mt-0'>{user.title}</dd>
                  <dd className='mt-1 text-sm sm:mt-0'>{user.email}</dd>
                  <button
                    className='text-red font-semibold'
                    onClick={onSuspend}
                  >
                    Suspend
                  </button>
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
