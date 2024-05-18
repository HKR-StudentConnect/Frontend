//frontend/src/api/auth.js
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
    console.error('Registration failed:', error.response.data)
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
    console.error('Login failed:', error)
  }
}
