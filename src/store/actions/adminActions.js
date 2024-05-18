// frontend/src/store/actions/adminActions.js
import baseInstance from '../../api/api';
import { fetchAllUsersStart, fetchAllUsersSuccess, fetchAllUsersFail } from '../slices/userSlice'; // Import the new actions

export const adminLogin = (credentials) => async (dispatch) => {
  try {
    const response = await baseInstance.post('/auth/admin/login', credentials);
    dispatch({ type: 'ADMIN_LOGIN_SUCCESS', payload: response.data });
    return true;
  } catch (error) {
    dispatch({ type: 'ADMIN_LOGIN_FAIL', payload: error.response.data });
    return false;
  }
};

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(fetchAllUsersStart());
  try {
    const response = await baseInstance.get('/admin/users');
    dispatch(fetchAllUsersSuccess(response.data)); // Dispatch the action with fetched users
  } catch (error) {
    dispatch(fetchAllUsersFail(error.response.data));
    console.error('Error fetching users:', error);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await baseInstance.delete(`/admin/delete/${userId}`);
    dispatch(fetchAllUsers()); // Refresh the user list after deletion
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export const suspendUser = (userId, period) => async (dispatch) => {
  try {
    await baseInstance.put(`/admin/suspend/${userId}`, { period });
    dispatch(fetchAllUsers()); // Refresh the user list after suspension
  } catch (error) {
    console.error('Error suspending user:', error);
  }
};

export const sendNotification = (message) => async (dispatch) => {
  try {
    await baseInstance.post('/admin/send-notification', { message });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

export const postEvent = (event) => async (dispatch) => {
  try {
    await baseInstance.post('/admin/post-event', { event });
  } catch (error) {
    console.error('Error posting event:', error);
  }
};

