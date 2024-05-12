// src/components/PostsSection.js
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
        <Post
          username='Miranda Shaffer'
          userAvatar='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fheadshot-silhouette-clipart-26.png&f=1&nofb=1&ipt=4e6ad97995d7c9e70530526338b39cb12d3ed2f08c644d236ff2113b48992468&ipo=images'
          timestamp='June 21, 12:45 pm'
          content='Having fun while cooking and eating variety of foods with @Sarah'
          imageUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F165%2Fthumb-1920-165265.jpg&f=1&nofb=1&ipt=eb65ef250bc0fd6910ff29a962fb1990b1ba1700d8453ad92eda8fc99e213acc&ipo=images'
        />
        <Post
          username='Miranda Shaffer'
          userAvatar='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fheadshot-silhouette-clipart-26.png&f=1&nofb=1&ipt=4e6ad97995d7c9e70530526338b39cb12d3ed2f08c644d236ff2113b48992468&ipo=images'
          timestamp='June 21, 12:45 pm'
          content='Having fun while cooking and eating variety of foods with @Sarah'
          imageUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F165%2Fthumb-1920-165265.jpg&f=1&nofb=1&ipt=eb65ef250bc0fd6910ff29a962fb1990b1ba1700d8453ad92eda8fc99e213acc&ipo=images'
        />
      </div>
    </div>
  )
}

export default PostsSection
