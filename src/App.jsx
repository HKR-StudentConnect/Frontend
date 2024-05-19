import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome/index.jsx'
import Login from './pages/login/index.jsx'
import Register from './pages/register/index.jsx'
import Home from './pages/home/index.jsx'
import Notifications from './pages/notifications/index.jsx'
import Profile from './pages/profile/index.jsx'
import Settings from './pages/settings/index.jsx'
import RequireAuth from '../src/components/requireAuth.jsx'
import Search from './pages/search/index.jsx'
import Admin from './pages/admin/home.jsx'
import AdminUserList from './pages/admin/users.jsx'
import Follows from './pages/users/follows.jsx'
import Followers from './pages/users/followers.jsx'
import { useSelector } from 'react-redux'
import AdminPostList from './pages/admin/posts.jsx'

function App() {
  const currentUser = useSelector(state => state.user.currentUser)
  const userRole = currentUser?.role
  console.log(userRole)

  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {userRole === 'admin' ? (
          <>
            <Route
              path='/'
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            />
            <Route
              path='/users'
              element={
                <RequireAuth>
                  <AdminUserList />
                </RequireAuth>
              }
            />
            <Route
              path='/posts'
              element={
                <RequireAuth>
                  <AdminPostList />
                </RequireAuth>
              }
            />
          </>
        ) : (
          <>
            <Route
              path='/'
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path='/notifications'
              element={
                <RequireAuth>
                  <Notifications />
                </RequireAuth>
              }
            />
            <Route
              path='/profile/:userId'
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path='/settings'
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            />
            <Route
              path='/search/:query'
              element={
                <RequireAuth>
                  <Search />
                </RequireAuth>
              }
            />
            <Route
              path='/profile/:userId/follows'
              element={
                <RequireAuth>
                  <Follows />
                </RequireAuth>
              }
            />
            <Route
              path='/profile/:userId/followers'
              element={
                <RequireAuth>
                  <Followers />
                </RequireAuth>
              }
            />
          </>
        )}
        <Route path='*' element={<Welcome />} />
      </Routes>
    </Router>
  )
}

export default App
