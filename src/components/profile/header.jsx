//frontend/src/components/profile/header.jsx
import React from 'react'

const Header = ({ user }) => {
  return (
    <div className='bg-background2 p-12 rounded-2xl'>
      <div className='flex items-center space-x-24 text-black'>
        <img
          src={user.profile.profilePictureUrl}
          alt='Profile'
          className='rounded-full w-36 h-36'
        />
        <div className='w-1/2'>
          <h1 className='text-2xl font-bold'>{user.username}</h1>
          <div className='flex space-x-16 my-4'>
            <div className='text-xl'>
              <strong>{user.posts.length}</strong> posts
            </div>
            <div className='text-xl'>
              <strong>{user.followers.length}</strong> followers
            </div>
            <div className='text-xl'>
              <strong>{user.follows.length}</strong> following
            </div>
          </div>
          <h1 className='text-lg font-bold'>{user.profile.name}</h1>
          <p className='text-lg'>{user.profile.bio}</p>
          <p className='text-lg'>{user.profile.university}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
