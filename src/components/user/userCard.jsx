import React from 'react'

const UserCard = ({ name, username, avatar }) => {
  return (
    <div className='bg-white flex items-center justify-between p-6 rounded-xl mb-2 border border-primary border-opacity-30'>
      <div className='flex items-center'>
        <img src={avatar} alt={name} className='rounded-full w-16 h-16 mr-4' />
        <div>
          <p className='font-semibold text-lg'>{name}</p>
          <p className='text-gray'>@{username}</p>
        </div>
      </div>
      <button className='bg-secondary hover:bg-background font-semibold py-2 px-4 rounded'>
        View
      </button>
    </div>
  )
}

export default UserCard
