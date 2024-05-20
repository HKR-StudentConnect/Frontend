import baseInstance from './api'
import { storeToken, storeUserId } from './storage'

const authSuffix = '/auth'

export const registerUser = async data => {
  try {
    const response = await baseInstance.post(`${authSuffix}/register`, {
      ...data,
    })
    return response.status
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error('Registration failed')
    }
  }
}

export const loginUser = async (email, password) => {
  try {
    const response = await baseInstance.post(`${authSuffix}/login`, {
      email,
      password,
    })
    const { userId, token } = response.data
    storeToken(token)
    storeUserId(userId)
    return userId
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error('An error occurred during login')
    }
  }
}
