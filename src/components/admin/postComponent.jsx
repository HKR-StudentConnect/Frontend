import React from 'react'

const PostComponent = ({ post, onDelete }) => {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center p-4 border-b border-background2'>
      {post.content.imageUrl ? (
        <div className='w-full sm:w-36 h-60 sm:h-24 sm:mr-6 mb-2 sm:mb-0'>
          <img
            src={post.content.imageUrl}
            alt='Post'
            className='h-full w-full rounded object-cover'
          />
        </div>
      ) : null}
      <div className='flex-1 mb-2 sm:mb-0'>
        <h3 className='text-lg font-semibold'>{post.content.text}</h3>
        <div className='text-sm text-gray-600'>
          <p>
            <strong>{post.likes.length}</strong> Likes
          </p>
          <p>
            <strong>{post.comments.length}</strong> Comments
          </p>
        </div>
      </div>
      <button
        onClick={() => onDelete(post._id)}
        className='bg-red text-white font-semibold px-3 py-1 rounded sm:ml-4'
      >
        Delete
      </button>
    </div>
  )
}

export default PostComponent
