import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followAUser, unfollowAUser } from '../../store/actions/userActions'

const FollowingUserCard = ({ user }) => {
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
    <div className='bg-white flex items-center justify-between px-4 py-2 rounded-xl mb-2 border border-primary border-opacity-30'>
      <div className='flex items-center'>
        <img
          src={
            user.profile.profilePictureUrl ??
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Ffacebook-no-profile-picture-icon-19.jpg&f=1&nofb=1&ipt=8dc5b2976198cd8c00599f0320446330ab55c8d578cd7b27a7831a2cb604a13a&ipo=images'
          }
          alt={user.profile.name}
          className='rounded-full w-12 h-12 mr-4'
        />
        <div>
          <p className='font-semibold text-md'>{user.profile.name}</p>
          <p className='text-gray text-sm'>@{user.username}</p>
        </div>
      </div>
      <button
        onClick={toggleFollow}
        className='bg-secondary hover:bg-background font-semibold text-sm p-2 rounded'
      >
        {followStatus ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default FollowingUserCard
