import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  followsPosts: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
    },
    logoutUser: state => {
      state.currentUser = null
    },
    addPost: (state, action) => {
      state.currentUser.posts.unshift(action.payload)
    },
    addFollowee: (state, action) => {
      state.currentUser.follows.push(action.payload)
    },
    removeFollowee: (state, action) => {
      state.currentUser.follows = state.currentUser.follows.filter(
        followeeId => followeeId !== action.payload
      )
    },
  },
})

export const { setUser, logoutUser, addPost, addFollowee, removeFollowee } =
  userSlice.actions
export default userSlice.reducer
