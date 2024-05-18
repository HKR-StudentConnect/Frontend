import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  followUserAction,
  unfollowUserAction,
} from '../../store/actions/userActions'
import ProfilePicture from './profilePicture'
import { useNavigate } from 'react-router-dom'

const UserCardLg = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  const followStatus = currentUser.follows.some(
    followeeId => followeeId === user._id
  )

  const toggleFollow = async () => {
    if (followStatus) {
      dispatch(unfollowUserAction(currentUser._id, user._id))
    } else {
      dispatch(followUserAction(currentUser._id, user._id))
    }
  }

  const navigateToProfile = () => {
    navigate(`/profile/${user._id}`)
  }

  return (
    <div className='bg-white flex items-center justify-between p-6 rounded-xl mb-2 border border-primary border-opacity-30'>
      <div className='flex items-center flex-1' onClick={navigateToProfile}>
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
