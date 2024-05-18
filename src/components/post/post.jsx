import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaCommentAlt } from 'react-icons/fa'
import CommentCard from './commentCard'
import ProfilePicture from '../user/profilePicture'
import {
  addCommentAction,
  deleteCommentAction,
  deletePostAction,
  likePostAction,
  unlikePostAction,
} from '../../store/actions/postActions'
import { useDispatch } from 'react-redux'
import { getPublicUserInfo } from '../../api/user'
import { MdDelete } from 'react-icons/md'

const Post = ({ post, currentUser }) => {
  const dispatch = useDispatch()
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [commentUsers, setCommentUsers] = useState({})
  const likeStatus = post.likes.some(like => like.userId === currentUser._id)

  useEffect(() => {
    const fetchCommentUsers = async () => {
      const users = {}
      await Promise.all(
        post.comments.map(async comment => {
          const userData = await getPublicUserInfo(comment.userId)
          users[comment.userId] = userData.username
        })
      )
      setCommentUsers(users)
    }

    fetchCommentUsers()
  }, [post.comments])

  const toggleLike = () => {
    if (!likeStatus) {
      dispatch(likePostAction(post._id, currentUser._id))
    } else {
      dispatch(unlikePostAction(post._id, currentUser._id))
    }
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  const onDeleteComment = commentId => {
    dispatch(deleteCommentAction(post._id, commentId))
  }

  const addComment = () => {
    if (newComment.trim()) {
      dispatch(addCommentAction(post._id, currentUser._id, newComment))
      setNewComment('')
    }
  }

  const deletePost = () => {
    dispatch(deletePostAction(post._id))
  }

  return (
    <div className='bg-white p-6 rounded-xl mb-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center mb-2'>
          <ProfilePicture
            imageUrl={currentUser.profile.profilePictureUrl}
            width={8}
            height={8}
          />
          <div>
            <p className='font-semibold'>{currentUser.username}</p>
            <p className='text-xs text-gray-500'>{'June 21, 12:45 pm'}</p>
          </div>
        </div>
        {post.authorId === currentUser._id ? (
          <button onClick={deletePost}>
            <MdDelete className='text-red text-xl' />
          </button>
        ) : null}
      </div>
      <p className='mb-4'>{post.content.text}</p>
      {post.content.imageUrl ? (
        <img
          src={post.content.imageUrl}
          alt=''
          className='w-full h-auto rounded-lg mb-4'
        />
      ) : null}
      <div className='flex items-center text-gray-600 mb-4'>
        <button
          onClick={toggleLike}
          className='flex items-center mr-4 cursor-pointer'
        >
          {likeStatus ? (
            <FaHeart className='text-primary mr-2 text-xl' />
          ) : (
            <FaRegHeart className='text-gray mr-2 text-xl' />
          )}
          <span>Like</span>
        </button>
        <button
          className='flex items-center cursor-pointer'
          onClick={toggleComments}
        >
          <FaCommentAlt className='text-gray mr-2 text-lg' />
          <span>Comment</span>
        </button>
      </div>

      {/* Comment Section */}
      {showComments && (
        <div className='mt-4'>
          <div className='mb-4'>
            {post.comments.map(comment => (
              <CommentCard
                key={comment._id}
                username={commentUsers[comment.userId] || comment.userId}
                text={comment.text}
                canDelete={comment.userId === currentUser._id}
                onClick={() => onDeleteComment(comment._id)}
              />
            ))}
          </div>

          <div className='flex items-center bg-background rounded px-2 py-2'>
            <input
              type='text'
              placeholder='Write a comment...'
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              className='text-black bg-transparent flex-1 focus:ring-0 outline-none border-none focus:border-primary text-md'
            />
            <button onClick={addComment} className='mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='green'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.75 9.75l7.5 7.5 7.5-7.5M12.25 17.25v-15'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
