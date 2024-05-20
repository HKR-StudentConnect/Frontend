import React, { useEffect } from 'react'
import Post from '../post/post'
import FollowsPost from '../post/followsPost'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from '../../store/actions/postActions'

const PostsGrid = ({ user, isCurrentUser }) => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.data)

  useEffect(() => {
    dispatch(fetchUserPosts(user._id))
  }, [dispatch, user._id])

  if (!posts) {
    return <div>loading...</div>
  }

  return (
    <div className='py-2 md:p-4 my-4'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4'>Posts</h2>
      <div className='grid grid-cols-1 gap-0 sm:gap-4'>
        {posts.map(post =>
          isCurrentUser ? (
            <Post key={post._id} post={post} currentUser={user} />
          ) : (
            <FollowsPost key={post._id} post={post} currentUser={user} />
          )
        )}
      </div>
    </div>
  )
}

export default PostsGrid
