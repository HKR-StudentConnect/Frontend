// File: frontend/src/store/actions/userActions.js

import { loginUser, registerUser } from '../../api/auth';
import { createPost } from '../../api/post';
import { resetUser } from '../../api/storage';
import {
  followUser,
  getUserFollowsPosts,
  getUserInfo,
  unfollowUser,
} from '../../api/user';
import {
  setUser,
  logoutUser,
  addPost,
  addFollowee,
  removeFollowee,
  fetchFollowsPosts,
} from '../slices/userSlice';

export const registerAndSetUser = data => async dispatch => {
  try {
    const result = await registerUser(data);
    if (result === 201) {
      const userId = await loginUser(data.email, data.password);
      const user = await getUserInfo(userId);
      dispatch(setUser(user));
      return { success: true, user }; // Ensure user object is returned
    }
  } catch (error) {
    console.error('Registration failed:' + error);
  }
};

export const loginAndSetUser = (email, password) => async dispatch => {
  try {
    const userId = await loginUser(email, password);
    const user = await getUserInfo(userId);
    dispatch(setUser(user));
    return { success: true, user }; // Ensure user object is returned
  } catch (error) {
    console.error('Error logging in user:' + error);
    return { success: false, error };
  }
};

export const userLogout = () => async dispatch => {
  try {
    dispatch(logoutUser());
    resetUser();
    return { success: true };
  } catch (error) {
    console.error(error);
  }
};

export const createAndAddPost = (text, imageUrl) => async dispatch => {
  try {
    const post = await createPost(text, imageUrl);
    dispatch(addPost(post));
    return { success: true };
  } catch (error) {
    console.error(error);
  }
};

export const followAUser = (userId, followeeId) => async dispatch => {
  try {
    const followee = await followUser(userId, followeeId);
    dispatch(addFollowee(followee));
    return { success: true };
  } catch (error) {
    console.error(error);
  }
};

export const unfollowAUser = (userId, followeeId) => async dispatch => {
  try {
    const unfollowedUserId = await unfollowUser(userId, followeeId);
    dispatch(removeFollowee(unfollowedUserId.followeeId));
    return { success: true };
  } catch (error) {
    console.error(error);
  }
};

export const getFollowsPosts = userId => async dispatch => {
  try {
    const posts = await getUserFollowsPosts(userId);
    dispatch(fetchFollowsPosts(posts));
  } catch (error) {
    console.error(error);
  }
};
