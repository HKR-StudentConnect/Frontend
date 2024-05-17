import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaCommentAlt } from 'react-icons/fa'
import {
  createComment,
  deleteComment,
  likePost,
  unlikePost,
} from '../../api/post'
import CommentCard from './commentCard'
import ProfilePicture from '../user/profilePicture'

const Post = ({ post, currentUser }) => {
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState(post.comments)
  const [likeStatus, setLikeStatus] = useState(
    post.likes.filter(like => like.user._id === currentUser._id).length > 0
  )

  const toggleLike = async () => {
    if (!likeStatus) {
      const response = await likePost(post._id, currentUser._id)
      if (response.status === 200) {
        setLikeStatus(true)
      }
    } else {
      const response = await unlikePost(post._id, currentUser._id)
      if (response.status === 200) {
        setLikeStatus(false)
      }
    }
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  const onDeleteComment = async commentId => {
    console.log(commentId)
    const response = await deleteComment(post._id, commentId)
    if (response.status === 200) {
      setComments(comments.filter(cmt => cmt._id !== commentId))
    }
  }

  const addComment = async () => {
    if (newComment.trim()) {
      const response = await createComment(
        post._id,
        currentUser._id,
        newComment
      )
      if (response.status === 200) {
        setComments([
          ...comments,
          {
            _id: response.data.commentId,
            user: currentUser,
            text: newComment,
            timestamp: new Date(),
          },
        ])
        setNewComment('')
      }
    }
  }

  return (
    <div className='bg-white p-6 rounded-xl mb-4'>
      <div className='flex items-center mb-2'>
        <ProfilePicture
          imageUrl={post.author.profile.profilePictureUrl}
          width={8}
          height={8}
        />
        <div>
          <p className='font-semibold'>{post.author.username}</p>
          <p className='text-xs text-gray-500'>{'June 21, 12:45 pm'}</p>
        </div>
      </div>
      <p className='mb-4'>{post.content.text}</p>
      <img
        src={post.content.imageUrl}
        alt='PostImage'
        className='w-full h-auto rounded-lg mb-4'
      />
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
            {comments.map(comment => (
              <CommentCard
                key={comment._id}
                username={comment.user.username}
                text={comment.text}
                canDelete={comment.user._id === currentUser._id}
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
