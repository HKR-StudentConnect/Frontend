import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followAUser, unfollowAUser } from '../../store/actions/userActions'
import ProfilePicture from './profilePicture'

const UserCardLg = ({ user }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  const [followStatus, setFollowStatus] = useState(
    currentUser.follows.filter(followee => followee._id === user._id).length > 0
  )

  const toggleFollow = async () => {
    if (followStatus) {
      const result = await dispatch(unfollowAUser(currentUser._id, user._id))
      if (result.success) {
        setFollowStatus(false)
      }
    } else {
      const result = await dispatch(followAUser(currentUser._id, user._id))
      if (result.success) {
        setFollowStatus(true)
      }
    }
  }

  return (
    <div className='bg-white flex items-center justify-between p-6 rounded-xl mb-2 border border-primary border-opacity-30'>
      <div className='flex items-center'>
        <ProfilePicture
          imageUrl={user.profile.profilePictureUrl}
          width={16}
          height={16}
        />
        <div>
          <p className='font-semibold text-lg'>{user.profile.name}</p>
          <p className='text-gray'>@{user.username}</p>
        </div>
      </div>
      <button
        onClick={toggleFollow}
        className='bg-secondary hover:bg-background font-semibold py-2 px-4 rounded'
      >
        {followStatus ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default UserCardLg
