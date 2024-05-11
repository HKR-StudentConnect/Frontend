import React from 'react'

const FeedProfile = ({ user }) => {
  return (
    <div className='bg-white p-6 rounded-xl h-screen sticky top-0'>
      <div className='flex flex-col items-center'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdpnow.com%2Fimages%2FPhotoFixChallenge%2FDSC00092.JPG&f=1&nofb=1&ipt=bbd3316135e4cf83295b71bc7aa2ae5e8a5317d8ad2feea56d0e1f94a28c8920&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fheadshot-silhouette-clipart-26.png&f=1&nofb=1&ipt=4e6ad97995d7c9e70530526338b39cb12d3ed2f08c644d236ff2113b48992468&ipo=images'
          alt='John Doe'
          className='rounded-full mb-4 h-36 w-36 border-8 border-secondary'
        />
        <h2 className='font-bold mb-2'>{user.username}</h2>
        <p className='text-sm text-gray-600 mb-6 text-center'>
          "Hey, fellow students! Just a HKR student navigating through the highs
          and lows of university life" Lives in Kristianstad
        </p>
      </div>
      <h3 className='font-bold text-lg mb-2'>FRIENDS</h3>
      <ul>
        {['Gulshan', 'Solomon', 'Ahmed', 'Kavish', 'Mohid', 'Saqib'].map(
          friend => (
            <li key={friend} className='flex items-center mb-2'>
              <span className='h-4 w-4 rounded-full bg-green-500 mr-2'></span>{' '}
              {friend}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default FeedProfile
