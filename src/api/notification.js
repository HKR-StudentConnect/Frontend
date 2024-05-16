import baseInstance from './api'

const notificationSuffix = '/notification'

export const getNotifications = async userId => {
  try {
    const response = await baseInstance.get(`${notificationSuffix}/${userId}`)
    return response
  } catch (error) {
    console.error('Error creating post:', error.response.data)
  }
}
