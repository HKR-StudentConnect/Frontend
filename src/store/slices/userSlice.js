import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
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
      state.currentUser.posts.push(action.payload)
    },
  },
})

export const { setUser, logoutUser, addPost } = userSlice.actions
export default userSlice.reducer
