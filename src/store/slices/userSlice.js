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
      state.currentUser.posts.push(action.payload)
    },
    addFollowee: (state, action) => {
      state.currentUser.follows.push(action.payload)
    },
    removeFollowee: (state, action) => {
      const followeeId = action.payload
      state.currentUser.follows = state.currentUser.follows.filter(
        followee => followee._id !== followeeId
      )
      console.log(state.currentUser.follows.length)
    },
    fetchFollowsPosts: (state, action) => {
      state.followsPosts = action.payload
    },
  },
})

export const {
  setUser,
  logoutUser,
  addPost,
  addFollowee,
  removeFollowee,
  fetchFollowsPosts,
} = userSlice.actions
export default userSlice.reducer
