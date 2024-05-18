import React, { useEffect, useState } from 'react'
import UserCardSm from '../user/userCardSm'
import { getPublicUserInfo } from '../../api/user'
import ProfilePicture from '../user/profilePicture'

const FeedProfile = ({ user }) => {
  const [follows, setFollows] = useState([])

  useEffect(() => {
    const fetchFollows = async () => {
      const users = await Promise.all(
        user.follows.map(async followeeId => {
          const data = await getPublicUserInfo(followeeId)
          return data
        })
      )
      setFollows(users)
    }

    fetchFollows()
  }, [user.follows])

  return (
    <div className='bg-white p-6 rounded-xl sticky top-0'>
      <div className='flex flex-col items-center'>
        <div className='rounded-full border-8 border-secondary w-36 h-36 mb-4'>
          <ProfilePicture
            imageUrl={user.profile.profilePictureUrl}
            width={'full'}
            height={'full'}
          />
        </div>
        <h2 className='font-bold mb-2'>{user.username}</h2>
        <p className='text-sm text-gray-600 mb-6 text-center'>
          {user.profile.bio ?? ''}
        </p>
      </div>
      {user.follows.length > 0 ? (
        <>
          <h3 className='font-bold text-lg mb-2'>Following</h3>
          <ul>
            {follows.slice(0, 10).map(followee => (
              <UserCardSm key={followee._id} user={followee} />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}

export default FeedProfile
