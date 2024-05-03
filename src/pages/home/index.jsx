import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const user = location.state?.user || 'Guest'
  return (
    <div>
      <h1>Welcome to Student Connect, {user.username}</h1>
    </div>
  )
}

export default Home
