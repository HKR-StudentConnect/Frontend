// Pages/Signinpage.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signimage from '../../assets/signupimage.jpeg'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  async function submit(event) {
    event.preventDefault()
    console.log('Form submitted:', formData)

    const obj = {
      email: formData.email,
      password: formData.password,
    }

    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })

    if (response.ok) {
      const jsonData = await response.json()
      console.log(jsonData)
      navigate('/home', { state: { user: jsonData.user } })
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-green-400'>
      <div className='max-w-md bg-green-400 p-8 rounded-lg shadow-md flex'>
        <img
          src={signimage}
          alt=' img for sign in '
          className='  h-64 w-128 object-cover rounded-full '
        />
      </div>
      <div className='ml-8'>
        <h2 className='text-2xl font-bold mb-4'>Log In</h2>

        <form onSubmit={submit} className='mt-4'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <button
            type='submit'
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          >
            Log In
          </button>
        </form>
        <p className='mt-4'>
          Don't have an account?
          <Link to='/signup' className='text-blue-500'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
