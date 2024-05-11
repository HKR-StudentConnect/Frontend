import React from 'react'

const CreatePostButton = ({ onClick }) => {
  return (
    <div
      className='bg-secondary p-4 rounded-lg mb-4 cursor-pointer'
      onClick={onClick}
    >
      <span className='text-gray-500'>What's on your mind, [Username]?</span>
    </div>
  )
}

export default CreatePostButton
