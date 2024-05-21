import React from 'react'
import ProfilePicture from '../user/profilePicture'
import { useNavigate } from 'react-router-dom'

const ProfileHeader = ({ user }) => {
  const navigate = useNavigate()

  const navigateToFollowers = () => {
    navigate(`/profile/${user._id}/followers`)
  }

  const navigateToFollows = () => {
    navigate(`/profile/${user._id}/follows`)
  }

  return (
    <div className='sm:bg-background2 sm:p-12 rounded-2xl'>
      <div className='flex md:items-center space-x-8 sm:space-x-16 text-black'>
        <ProfilePicture
          imageUrl={user.profile?.profilePictureUrl || null}
          className={'w-16 md:w-36 h-16 md:h-36 mr-4'}
        />
        <div className='w-1/2'>
          <h1 className='text-lg sm:text-xl font-bold'>{user.username}</h1>
          <div className='flex space-x-8 md:space-x-16 my-4'>
            <div className='text-sm sm:text-lg'>
              <strong>{user.posts.length}</strong> posts
            </div>
            <div
              className='text-sm sm:text-lg cursor-pointer'
              onClick={navigateToFollowers}
            >
              <strong>{user.followers.length}</strong> followers
            </div>
            <div
              className='text-sm sm:text-lg cursor-pointer'
              onClick={navigateToFollows}
            >
              <strong>{user.follows.length}</strong> following
            </div>
          </div>
          <h1 className='text-md sm:text-lg font-bold'>{user.profile.name}</h1>
          <p className='text-md sm:text-lg'>{user.profile.bio}</p>
          <p className='text-md sm:text-lg'>{user.profile.university}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
