import { combineReducers } from 'redux'
import userReducer from '../slices/userSlice'
import postReducer from '../slices/postSlice'
import followsPostReducer from '../slices/followsPostSlice'

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  followsPost: followsPostReducer,
})

export default rootReducer
