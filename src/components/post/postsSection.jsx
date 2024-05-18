import React, { useEffect, useState } from 'react'
import CreatePostButton from './createPostButton'
import CreatePostModal from './createPostModal'
import { useSelector, useDispatch } from 'react-redux'
import { getFollowsPosts } from '../../store/actions/followsPostAction'
import FollowsPost from './followsPost'

const PostsSection = ({ user }) => {
  const dispatch = useDispatch()
  const followsPosts = useSelector(state => state.followsPost.data)
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
      <CreatePostModal show={isModalOpen} onClose={closeModal} user={user} />
      <div>
        {followsPosts.map(post => (
          <FollowsPost key={post._id} post={post} currentUser={user} />
        ))}
      </div>
    </div>
  )
}

export default PostsSection
