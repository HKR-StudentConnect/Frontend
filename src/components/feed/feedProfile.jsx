import React from 'react'
import UserCardSm from '../user/userCardSm'

const FeedProfile = ({ user }) => {
  return (
    <div className='bg-white p-6 rounded-xl h-screen sticky top-0'>
      <div className='flex flex-col items-center'>
        <img
          src={
            user.profile.profilePictureUrl ??
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Ffacebook-no-profile-picture-icon-19.jpg&f=1&nofb=1&ipt=8dc5b2976198cd8c00599f0320446330ab55c8d578cd7b27a7831a2cb604a13a&ipo=images'
          }
          alt='ProfilePic'
          className='text-center rounded-full mb-4 h-36 w-36 border-8 border-secondary'
        />
        <h2 className='font-bold mb-2'>{user.username}</h2>
        <p className='text-sm text-gray-600 mb-6 text-center'>
          {user.profile.bio ?? ''}
        </p>
      </div>
      {user.follows.length > 0 ? (
        <>
          <h3 className='font-bold text-lg mb-2'>Following</h3>
          <ul>
            {user.follows.map(followee => (
              <UserCardSm user={followee} />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}

export default FeedProfile
