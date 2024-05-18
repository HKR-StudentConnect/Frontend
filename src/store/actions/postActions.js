import {
  createComment,
  deleteComment,
  deletePost,
  getPosts,
  likePost,
  unlikePost,
} from '../../api/post'
import {
  commentUpdated,
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
  removePost,
  updatePost,
} from '../slices/postSlice'

export const fetchUserPosts = userId => async dispatch => {
  try {
    dispatch(fetchPostsRequest())
    const data = await getPosts(userId)
    dispatch(fetchPostsSuccess(data))
  } catch (error) {
    dispatch(fetchPostsFailure(error.message))
  }
}

export const deletePostAction = postId => async dispatch => {
  const response = await deletePost(postId)
  if (response.status === 200) {
    dispatch(removePost(postId))
  }
}

export const likePostAction = (postId, userId) => async dispatch => {
  const response = await likePost(postId, userId)
  if (response.status === 200) {
    dispatch(updatePost(response.data))
  }
}

export const unlikePostAction = (postId, userId) => async dispatch => {
  const response = await unlikePost(postId, userId)
  if (response.status === 200) {
    dispatch(updatePost(response.data))
  }
}

export const addCommentAction = (postId, userId, comment) => async dispatch => {
  const response = await createComment(postId, userId, comment)
  console.log('response: ', response)
  if (response.status === 200) {
    dispatch(commentUpdated(response))
  }
}

export const deleteCommentAction = (postId, commentId) => async dispatch => {
  const response = await deleteComment(postId, commentId)
  if (response.status === 200) {
    dispatch(updatePost(response.data))
  }
}
