import React, { useState } from 'react'

const Post = ({ username, userAvatar, timestamp, content, imageUrl }) => {
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([
    { id: 1, text: 'Great post!', author: 'John Doe' },
    { id: 2, text: 'Thanks for sharing!', author: 'Jane Doe' },
  ])

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, text: newComment, author: 'You' },
      ])
      setNewComment('')
    }
  }

  return (
    <div className='bg-white p-6 rounded-xl mb-4'>
      <div className='flex items-center mb-2'>
        <img
          src={userAvatar}
          alt={username}
          className='rounded-full w-8 h-8 mr-2'
        />
        <div>
          <p className='font-semibold'>{username}</p>
          <p className='text-xs text-gray-500'>{timestamp}</p>
        </div>
      </div>
      <p className='mb-4'>{content}</p>
      <img
        src={imageUrl}
        alt='PostImage'
        className='w-full h-auto rounded-lg mb-4'
      />
      <div className='flex items-center text-gray-600 mb-4'>
        <span className='flex items-center mr-4 cursor-pointer'>
          <i className='mr-1'>👍 Like</i>
        </span>
        <span
          className='flex items-center cursor-pointer'
          onClick={toggleComments}
        >
          <i className='mr-1'>💬 Comment</i>
        </span>
      </div>
      {/* Comment Section */}
      {showComments && (
        <div className='mt-4'>
          {/* Comments List */}
          <div className='mb-4'>
            {comments.map(comment => (
              <div key={comment.id} className='flex items-center mb-2'>
                <span className='text-sm font-semibold mr-2'>
                  {comment.author}:
                </span>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>

          <div className='flex items-center bg-background rounded px-4 py-4'>
            <input
              type='text'
              placeholder='Write a comment...'
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              className='text-black bg-transparent flex-1 outline-none text-md'
            />
            <button onClick={addComment} className='text-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='green'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.75 9.75l7.5 7.5 7.5-7.5M12.25 17.25v-15'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
