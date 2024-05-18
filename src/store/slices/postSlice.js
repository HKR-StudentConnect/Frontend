import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    fetchPostsRequest: state => {
      state.loading = true
      state.error = null
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updatePost: (state, action) => {
      const index = state.data.findIndex(
        post => post._id === action.payload._id
      )
      if (index !== -1) {
        state.data[index] = action.payload
      }
    },
    removePost: (state, action) => {
      state.data = state.data.filter(post => post._id !== action.payload)
    },
    commentUpdated: (state, action) => {
      const postData = action.payload.data
      const index = state.data.findIndex(post => post._id === postData._id)
      if (index !== -1) {
        state.data[index] = postData
      }
    },
  },
})

export const {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  updatePost,
  removePost,
  commentUpdated,
} = postSlice.actions
export default postSlice.reducer
