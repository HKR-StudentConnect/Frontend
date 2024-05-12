import React, { useState } from 'react'
import Post from './post'
import CreatePostButton from './createPostButton'
import CreatePostModal from './createPostModal'

const PostsSection = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className='w-full'>
      <CreatePostButton user={user} onClick={openModal} />
      <CreatePostModal show={isModalOpen} onClose={closeModal} />

      <div>
        {user.posts.map(post => (
          <Post
            username={user.username}
            userAvatar={user.profile.profilePictureUrl}
            timestamp='June 21, 12:45 pm'
            content={post.content.text}
            imageUrl={post.content.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default PostsSection
