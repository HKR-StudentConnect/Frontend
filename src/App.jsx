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
import Admin from './pages/admin/index.jsx'
import Follows from './pages/users/follows.jsx'
import Followers from './pages/users/followers.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
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
          path='/profile'
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
          path='/follows'
          element={
            <RequireAuth>
              <Follows />
            </RequireAuth>
          }
        />
        <Route
          path='/followers'
          element={
            <RequireAuth>
              <Followers />
            </RequireAuth>
          }
        />
        <Route path='*' element={<Welcome />} />
      </Routes>
    </Router>
  )
}

export default App
