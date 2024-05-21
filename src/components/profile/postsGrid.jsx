import React, { useEffect, useState } from 'react'
import Post from '../post/post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from '../../store/actions/postActions'
import ProfilePost from '../post/profilePost'
import Loading from '../../components/loading'
import { getPosts } from '../../api/post'

const PostsGrid = ({ user, currentUser, isCurrentUser }) => {
  const dispatch = useDispatch()
  const currentUserPosts = useSelector(state => state.post.data)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    if (isCurrentUser) {
      dispatch(fetchUserPosts(user._id))
    } else {
      const fetchPosts = async () => {
        const data = await getPosts(user._id)
        setPosts(data)
      }
      fetchPosts()
    }
  }, [dispatch, isCurrentUser, user._id])

  if (isCurrentUser && !currentUserPosts) {
    return <Loading />
  }

  if (!isCurrentUser && !posts) {
    return <Loading />
  }

  return (
    <div className='py-2 md:p-4 my-4'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4'>Posts</h2>
      <div className='grid grid-cols-1 gap-0 sm:gap-4'>
        {isCurrentUser
          ? currentUserPosts.map(post => (
              <Post key={post._id} post={post} currentUser={currentUser} />
            ))
          : posts.map(post => (
              <ProfilePost
                key={post._id}
                post={post}
                currentUser={currentUser}
              />
            ))}
      </div>
    </div>
  )
}

export default PostsGrid
