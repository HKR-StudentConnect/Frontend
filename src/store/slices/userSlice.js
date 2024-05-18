// frontend/src/store/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  followsPosts: [],
  allUsers: [], // Add this line to include the state for all users
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    addPost: (state, action) => {
      state.currentUser.posts.push(action.payload);
    },
    addFollowee: (state, action) => {
      state.currentUser.follows.push(action.payload);
    },
    removeFollowee: (state, action) => {
      const followeeId = action.payload;
      state.currentUser.follows = state.currentUser.follows.filter(
        (followee) => followee._id !== followeeId
      );
    },
    fetchFollowsPosts: (state, action) => {
      state.followsPosts = action.payload;
    },
    fetchAllUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.allUsers = action.payload; // Add this line to handle fetched users
    },
    fetchAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setUser,
  logoutUser,
  addPost,
  addFollowee,
  removeFollowee,
  fetchFollowsPosts,
  fetchAllUsersStart,
  fetchAllUsersSuccess,
  fetchAllUsersFail,
} = userSlice.actions;

export default userSlice.reducer;

