import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome/index.jsx'
import Login from './pages/login/index.jsx'
import Register from './pages/register/index.jsx'
import Home from './pages/home/index.jsx'

function App() {
  return (
    <Router>
      <div className=' flex flex-col bg-green-400 min-h-screen'>
        <header className='bg-green-800 p-4'>
          <h1 className='text-white text-2xl'>Student Connect </h1>
        </header>
        <div className='container mx-auto flex-grow p-4'>
          {
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          }
        </div>
        <div>
          <footer className=' flex flex-col bg-orange-300 p2 min-h-14 justify-center items-center'>
            <h1 className='text to-white text-2xl'>
              Allrights reserved by StudentconnectHKR
            </h1>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
