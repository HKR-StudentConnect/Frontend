import React from 'react'

const AdminStats = ({ stats }) => {
  const statItems = [
    { label: 'Total Users', value: stats.users },
    { label: 'Online Users', value: stats.online_users },
    { label: 'Suspended Users', value: stats.suspendedUsers },
    { label: 'Total Posts', value: stats.posts },
  ]

  return (
    <div className='bg-background text-white rounded-lg overflow-hidden'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        {statItems.map((stat, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center p-4 bg-primary rounded-lg'
          >
            <dt className='sm:text-sm md:text-lg font-semibold'>
              {stat.label}
            </dt>
            <dd className='mt-1 text-2xl font-semibold text-secondary'>
              {stat.value}
            </dd>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminStats
