import React, { useEffect } from 'react'
import Post from '../post/post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from '../../store/actions/postActions'

const PostsGrid = ({ user }) => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.data)

  useEffect(() => {
    dispatch(fetchUserPosts(user._id))
  }, [dispatch, user._id])

  return (
    <div className='p-4 my-4'>
      <h2 className='text-2xl font-bold mb-4'>Posts</h2>
      <div className='grid grid-cols-1 gap-4'>
        {posts.map(post => (
          <Post key={post._id} post={post} currentUser={user} />
        ))}
      </div>
    </div>
  )
}

export default PostsGrid
