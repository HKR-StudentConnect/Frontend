import baseInstance from './api'

const postSuffix = '/posts'

export const getPosts = async userId => {
  try {
    const response = await baseInstance.get(`${postSuffix}/user/${userId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching user posts:', error.response.data)
  }
}

export const createPost = async (text, imageUrl) => {
  try {
    const response = await baseInstance.post(`${postSuffix}`, {
      content: {
        text: text,
        imageUrl: imageUrl,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error creating post:', error.response.data)
  }
}

export const deletePost = async postId => {
  try {
    const response = await baseInstance.delete(`${postSuffix}/${postId}`)
    return response
  } catch (error) {
    console.error('Error creating post:', error.response.data)
  }
}

export const likePost = async (postId, userId) => {
  try {
    const response = await baseInstance.post(`${postSuffix}/${postId}/like`, {
      userId: userId,
    })
    return response
  } catch (error) {
    console.error('Error liking post:', error.response.data)
  }
}

export const unlikePost = async (postId, userId) => {
  try {
    const response = await baseInstance.post(`${postSuffix}/${postId}/unlike`, {
      userId: userId,
    })
    return response
  } catch (error) {
    console.error('Error unliking post:', error.response.data)
  }
}

export const createComment = async (postId, userId, text) => {
  try {
    const response = await baseInstance.post(
      `${postSuffix}/${postId}/comments`,
      {
        userId: userId,
        text: text,
      }
    )
    return response
  } catch (error) {
    console.error('Error creating comment:', error.response.data)
  }
}

export const deleteComment = async (postId, commentId) => {
  try {
    const response = await baseInstance.delete(
      `${postSuffix}/${postId}/comments/${commentId}`
    )
    return response
  } catch (error) {
    console.error('Error deleting comment:', error.response.data)
  }
}
