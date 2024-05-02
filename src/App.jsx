import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Homepage.jsx'
import SignInPage from './Pages/Signinpage.jsx'
import SignUpPage from './Pages/Signuppage.jsx'
import MainPage from './Pages/Postpage.jsx'

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
              <Route path='/' element={<HomePage />} />
              <Route path='/signin' element={<SignInPage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/main' element={<MainPage />} />
            </Routes>
          }
        </div>
        <div>
          <footer className=' flex flex-col bg-orange-300 p2 min-h-14 justify-center items-center'>
            <h1 className='text to-white text-2xl'>
              {' '}
              Allrights reserved by StudentconnectHKR
            </h1>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
