import baseInstance from './api'

const userSuffix = '/users'

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
    const response = await baseInstance.put(`/admin/suspend/${userId}`, {
      userId,
    })
    return response
  } catch (error) {
    console.error('Error suspending user:', error)
  }
}

export const unsuspendUser = async userId => {
  try {
    const response = await baseInstance.put(`/admin/unsuspend/${userId}`, {
      userId,
    })
    return response
  } catch (error) {
    console.error('Error unsuspending user:', error)
  }
}
