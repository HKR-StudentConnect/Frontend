import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const followsPostSlice = createSlice({
  name: 'followsPost',
  initialState: initialState,
  reducers: {
    fetchFollowsPostsRequest: state => {
      state.loading = true
      state.error = null
    },
    fetchFollowsPostsSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    fetchFollowsPostsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateFollowsPost: (state, action) => {
      const index = state.data.findIndex(
        post => post._id === action.payload._id
      )
      if (index !== -1) {
        state.data[index] = action.payload
      }
    },
    followsPostCommentUpdated: (state, action) => {
      const postData = action.payload
      const index = state.data.findIndex(post => post._id === postData._id)
      if (index !== -1) {
        state.data[index] = postData
      }
    },
  },
})

export const {
  fetchFollowsPostsRequest,
  fetchFollowsPostsSuccess,
  fetchFollowsPostsFailure,
  updateFollowsPost,
  followsPostCommentUpdated,
} = followsPostSlice.actions
export default followsPostSlice.reducer
