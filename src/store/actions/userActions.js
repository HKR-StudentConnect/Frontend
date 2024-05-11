import { loginUser } from '../../api/auth'
import { resetUser } from '../../api/storage'
import { setUser, logoutUser } from '../slices/userSlice'

export const loginAndSetUser = (email, password) => async dispatch => {
  try {
    const userId = await loginUser(email, password)
    dispatch(setUser(userId))
    return { success: true, userId: userId }
  } catch (error) {
    console.error('Executing loginAndSetUser failed:' + error)
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
