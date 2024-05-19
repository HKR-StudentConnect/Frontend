import baseInstance from './api'

const adminSuffix = '/admin'
const userSuffix = '/users'
const postSuffix = '/posts'

export const getAllUsers = async () => {
  try {
    const response = await baseInstance.get(`${userSuffix}/`)
    return response
  } catch (error) {
    console.error('Failed fetching all users:', error)
  }
}

export const suspendUser = async userId => {
  try {
    const response = await baseInstance.put(
      `${adminSuffix}/suspend/${userId}`,
      {
        userId,
      }
    )
    return response
  } catch (error) {
    console.error('Error suspending user:', error)
  }
}

export const unsuspendUser = async userId => {
  try {
    const response = await baseInstance.put(
      `${adminSuffix}/unsuspend/${userId}`,
      {
        userId,
      }
    )
    return response
  } catch (error) {
    console.error('Error unsuspending user:', error)
  }
}

export const getDashboardStats = async () => {
  try {
    const response = await baseInstance.get(`${adminSuffix}/dashboard-stats`)
    return response
  } catch (error) {
    console.error('Error fetching stats:', error)
  }
}

export const getAllPosts = async () => {
  try {
    const response = await baseInstance.get(postSuffix)
    return response
  } catch (error) {
    console.error('Error fetching stats:', error)
  }
}

export const deleteUserPost = async postId => {
  try {
    const response = await baseInstance.delete(`${postSuffix}/${postId}`)
    return response
  } catch (error) {
    console.error('Error creating post:', error.response.data)
  }
}
