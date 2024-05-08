import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome/index.jsx'
import Login from './pages/login/index.jsx'
import Register from './pages/register/index.jsx'
import Home from './pages/home/index.jsx'
import Navbar from './components/navbar/navbar.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <div>
        <footer className=' flex flex-col bg-orange-300 p2 min-h-14 justify-center items-center'>
          <h1 className='text to-white text-2xl'>
            Allrights reserved by StudentconnectHKR
          </h1>
        </footer>
      </div>
    </Router>
  )
}

export default App
