import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Welcome from './pages/welcome/index.jsx'
import Login from './pages/login/index.jsx'
import Register from './pages/register/index.jsx'
import Home from './pages/home/index.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Notifications from './pages/notifications/index.jsx'
import Profile from './pages/profile/index.jsx'
import Settings from './pages/settings/index.jsx'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

const AppContent = () => {
  const location = useLocation()
  const noNavbarOrFooterPaths = ['/welcome', '/login', '/register']
  const showNavbarAndFooter = !noNavbarOrFooterPaths.includes(location.pathname)

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  )
}

export default App
