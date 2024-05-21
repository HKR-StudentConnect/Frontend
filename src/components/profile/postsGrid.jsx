import React, { useEffect, useState } from 'react'
import Post from '../post/post'
import { useDispatch } from 'react-redux'
import { fetchUserPosts } from '../../store/actions/postActions'
import ProfilePost from '../post/profilePost'
import Loading from '../../components/loading'
import { getPosts } from '../../api/post'

const PostsGrid = ({ user, currentUser, isCurrentUser }) => {
  const dispatch = useDispatch()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    dispatch(fetchUserPosts(user._id))
    const fetchPosts = async () => {
      const data = await getPosts(user._id)
      setPosts(data)
    }
    fetchPosts()
  }, [dispatch, user._id])

  if (!posts) {
    return <Loading />
  }

  return (
    <div className='py-2 md:p-4 my-4'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4'>Posts</h2>
      <div className='grid grid-cols-1 gap-0 sm:gap-4'>
        {posts.map(post =>
          isCurrentUser ? (
            <Post key={post._id} post={post} currentUser={currentUser} />
          ) : (
            <ProfilePost key={post._id} post={post} currentUser={currentUser} />
          )
        )}
      </div>
    </div>
  )
}

export default PostsGrid
