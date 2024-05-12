import React, { useState } from 'react'

const CreatePostModal = ({ show, onClose }) => {
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  if (!show) {
    return null
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Here you would handle posting the new content to your backend or state
    console.log('Content:', content)
    console.log('Image URL:', imageUrl)
    onClose()
  }

  return (
    <div className='bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center z-50'>
      <div className='bg-background p-6 rounded-lg shadow-lg max-w-lg w-full'>
        <h2 className='text-xl font-semibold mb-4'>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className='w-full p-2 border border-gray rounded-md mb-2'
            placeholder="What's on your mind?"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <input
            type='text'
            className='w-full p-2 border border-gray rounded-md mb-2'
            placeholder='Image URL'
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
          <div className='flex justify-end mt-4'>
            <button
              type='button'
              className='text-black px-4 py-2 rounded mr-2'
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-primary text-black px-4 py-2 rounded'
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePostModal
