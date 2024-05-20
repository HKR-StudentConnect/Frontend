import { loginUser, registerUser } from '../../api/auth'
import { createPost } from '../../api/post'
import { resetUser } from '../../api/storage'
import {
  followUser,
  getUserInfo,
  unfollowUser,
  updateUserInfo,
} from '../../api/user'
import {
  setUser,
  logoutUser,
  addPost,
  addFollowee,
  removeFollowee,
} from '../slices/userSlice'

export const registerAndSetUser = data => async dispatch => {
  try {
    const result = await registerUser(data)
    if (result === 201) {
      const userId = await loginUser(data.email, data.password)
      if (userId) {
        const user = await getUserInfo(userId)
        dispatch(setUser(user))
      }
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const loginAndSetUser = (email, password) => async dispatch => {
  try {
    const userId = await loginUser(email, password)
    if (userId) {
      const user = await getUserInfo(userId)
      dispatch(setUser(user))
    }
  } catch (error) {
    throw new Error(error.message)
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

export const updateUserAction = (userId, data) => async dispatch => {
  try {
    const response = await updateUserInfo(userId, data)
    if (response.status === 200) {
      dispatch(setUser(response.data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const createAndAddPost =
  (text, imageUrl, currentUser) => async dispatch => {
    try {
      const post = await createPost(text, imageUrl)
      post.author = currentUser
      dispatch(addPost(post))
      return { success: true }
    } catch (error) {
      console.error(error)
    }
  }

export const followUserAction = (userId, followeeId) => async dispatch => {
  try {
    const response = await followUser(userId, followeeId)
    if (response.status === 200) {
      console.log(response.data)
      dispatch(addFollowee(response.data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const unfollowUserAction = (userId, followeeId) => async dispatch => {
  try {
    const response = await unfollowUser(userId, followeeId)
    if (response.status === 200) {
      dispatch(removeFollowee(response.data))
    }
  } catch (error) {
    console.error(error)
  }
}
