import { getUserFollowsPosts } from '../../api/user'
import {
  createComment,
  deleteComment,
  likePost,
  unlikePost,
} from '../../api/post'
import {
  fetchFollowsPostsFailure,
  fetchFollowsPostsRequest,
  fetchFollowsPostsSuccess,
  followsPostCommentUpdated,
  updateFollowsPost,
} from '../slices/followsPostSlice'

export const getFollowsPosts = userId => async dispatch => {
  try {
    dispatch(fetchFollowsPostsRequest())
    const posts = await getUserFollowsPosts(userId)
    dispatch(fetchFollowsPostsSuccess(posts))
  } catch (error) {
    dispatch(fetchFollowsPostsFailure(error.message))
  }
}

export const likeFollowsPostAction = (postId, userId) => async dispatch => {
  try {
    const response = await likePost(postId, userId)
    if (response.status === 200) {
      dispatch(updateFollowsPost(response.data))
    }
  } catch (error) {
    console.log(error)
  }
}

export const unlikeFollowsPostAction = (postId, userId) => async dispatch => {
  try {
    const response = await unlikePost(postId, userId)
    if (response.status === 200) {
      dispatch(updateFollowsPost(response.data))
    }
  } catch (error) {
    console.log(error)
  }
}

export const addFollowsPostCommentAction =
  (postId, userId, comment) => async dispatch => {
    try {
      const response = await createComment(postId, userId, comment)
      if (response.status === 200) {
        dispatch(followsPostCommentUpdated(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

export const deleteFollowsPostCommentAction =
  (postId, commentId) => async dispatch => {
    try {
      const response = await deleteComment(postId, commentId)
      if (response.status === 200) {
        dispatch(updateFollowsPost(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
