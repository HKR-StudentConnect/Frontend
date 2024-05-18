//frontend/src/components/post/postSection.jsx
import React, { useEffect, useState } from 'react'
import Post from './post'
import CreatePostButton from './createPostButton'
import CreatePostModal from './createPostModal'
import { useSelector, useDispatch } from 'react-redux'
import { getFollowsPosts } from '../../store/actions/userActions'

const PostsSection = ({ user }) => {
  const dispatch = useDispatch()
  const followsPosts = useSelector(state => state.user.followsPosts)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    dispatch(getFollowsPosts(user._id))
  }, [dispatch, followsPosts, user._id])

  if (!followsPosts) {
    return <div>Fetching</div>
  }

  return (
    <div className='w-full'>
      <CreatePostButton user={user} onClick={openModal} />
      <CreatePostModal show={isModalOpen} onClose={closeModal} />
      <div>
        {followsPosts.map(post => (
          <Post key={post._id} post={post} currentUser={user} />
        ))}
      </div>
    </div>
  )
}

export default PostsSection
