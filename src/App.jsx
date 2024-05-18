// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/index.jsx';
import Login from './pages/login/index.jsx';
import Register from './pages/register/index.jsx';
import Home from './pages/home/index.jsx';
import Notifications from './pages/notifications/index.jsx';
import Profile from './pages/profile/index.jsx';
import Settings from './pages/settings/index.jsx';
import RequireAuth from './components/requireAuth.jsx';
import Search from './pages/search/index.jsx';
import AdminDashboard from './pages/admin/adminDashboard.jsx';
import AdminLogin from './pages/login/adminLogin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
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
        <Route path='*' element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;


