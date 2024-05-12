import { loginUser, registerUser } from '../../api/auth'
import { resetUser } from '../../api/storage'
import { getUserInfo } from '../../api/user'
import { setUser, logoutUser } from '../slices/userSlice'

export const registerAndSetUser = data => async dispatch => {
  try {
    const result = await registerUser(data)
    if (result === 201) {
      const userId = await loginUser(data.email, data.password)
      const user = await getUserInfo(userId)
      dispatch(setUser(user))
      return { success: true }
    }
  } catch (error) {
    console.error('Registration failed:' + error)
  }
}

export const loginAndSetUser = (email, password) => async dispatch => {
  try {
    const userId = await loginUser(email, password)
    const user = await getUserInfo(userId)
    dispatch(setUser(user))
    return { success: true }
  } catch (error) {
    console.error('Error logging in user:' + error)
  }
}

export const userLogout = () => async dispatch => {
  try {
    dispatch(logoutUser())
    resetUser()
    return { success: true }
  } catch (error) {
    console.error(error)
  }
}
