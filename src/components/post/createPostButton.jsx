import React from 'react'
import { Link } from 'react-router-dom'

const CreatePostButton = () => {
  return (
    <Link>
      <div className='bg-secondary p-6 rounded-lg mb-4'>
        <span className='text-gray-500'>What's on your mind, [Username]?</span>
      </div>
    </Link>
  )
}

export default CreatePostButton
