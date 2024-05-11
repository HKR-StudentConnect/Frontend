import baseInstance from './api'
import { resetUser } from './storage'

const userSuffix = '/users'

export const getFullUserInfoByID = async userId => {
  try {
    const response = await baseInstance.get(`${userSuffix}/${userId}`)
    return response.data
  } catch (error) {
    if (error.response.status === '401') {
      resetUser()
    }
    console.error('Get Information failed:', error)
  }
}

export const getUserFollowers = async userId => {
  try {
    const response = await baseInstance.get(`${userSuffix}/${userId}/followers`)
    return response.data
  } catch (error) {
    console.error('Error fetching followers:', error.response.data)
  }
}

export const getUserFollows = async userId => {
  try {
    const response = await baseInstance.get(`${userSuffix}/${userId}/follows`)
    return response.data
  } catch (error) {
    console.error('Error fetching follows:', error.response.data)
  }
}

export const followUser = async (userId, followeeId) => {
  try {
    const response = await baseInstance.post(`${userSuffix}/${userId}/follow`, {
      followeeId: followeeId,
    })
    return response.status
  } catch (error) {
    console.error('Error following user:', error.response.data)
  }
}

export const unfollowUser = async (userId, followeeId) => {
  try {
    const response = await baseInstance.delete(
      `${userSuffix}/${userId}/follow`,
      {
        followeeId: followeeId,
      }
    )
    return response.status
  } catch (error) {
    console.error('Error unfollowing user:', error.response.data)
  }
}
