//frontend/src/components/post/createPostButton.jsx
import React from 'react'

const CreatePostButton = ({ user, onClick }) => {
  return (
    <div
      className='bg-secondary p-4 rounded-lg mb-4 cursor-pointer'
      onClick={onClick}
    >
      <span className='text-gray-500'>
        What's on your mind, {user.username}?
      </span>
    </div>
  )
}

export default CreatePostButton
