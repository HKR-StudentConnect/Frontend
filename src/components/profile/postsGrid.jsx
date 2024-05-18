//frontend/src/components/profile/postGrid.jsx
import React from 'react'

const PostsGrid = ({ posts }) => {
  return (
    <div className='p-4 my-4'>
      <h2 className='text-2xl font-bold mb-4'>Posts</h2>
      <div className='grid grid-cols-3 gap-4'>
        {posts.map((post, index) => (
          <div key={post._id} className='aspect-w-1 aspect-h-1'>
            <img
              src={post.content.imageUrl}
              alt={`Post ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsGrid
