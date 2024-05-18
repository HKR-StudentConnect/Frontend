import React from 'react'

const ProfilePicture = ({ imageUrl, width, height }) => {
  return (
    <div className={`rounded-full w-${width} h-${height} mr-4 bg-background`}>
      <img
        src={
          imageUrl ??
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Ffacebook-no-profile-picture-icon-19.jpg&f=1&nofb=1&ipt=8dc5b2976198cd8c00599f0320446330ab55c8d578cd7b27a7831a2cb604a13a&ipo=images'
        }
        alt={''}
        className='rounded-full w-full h-full mr-4'
      />
    </div>
  )
}

export default ProfilePicture
