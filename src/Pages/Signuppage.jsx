import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signupimage from '../assets/signupimage.jpeg'

const SignupPage = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
  })

  const handleChange = event => {
    if (event.target.name === 'profilePicture') {
      setData({ ...data, profilePicture: event.target.files[0] })
    } else {
      const { name, value } = event.target
      setData({ ...data, [name]: value })
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Handle form submission (send data to backend)
    console.log('Form submitted:', data)
    alert('Form submitted')
  }

  return (
    <div className='signuppage-bg min-h-screen flex flex-col justify-center items-center bg-gren-400'>
      <h2 className='text-3xl font-semibold mb-4'>Sign Up</h2>
      <div className='flex flex-col items-center'>
        <img
          src={signupimage}
          alt='Sign Up Img'
          className='h-64 w-128 object-cover rounded-full mb-8'
        />
        <form onSubmit={handleSubmit} className='w-full max-w-md'></form>
        <form onSubmit={handleSubmit} className='w-full max-w-md'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={data.name}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='age' className='block text-gray-700'>
              Age
            </label>
            <input
              type='text'
              id='age'
              name='age'
              value={data.age}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phone' className='block text-gray-700'>
              Phone
            </label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={data.phone}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-gray-700'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={data.username}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={data.email}
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
              value={data.password}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='block text-gray-700'>
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={data.confirmPassword}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='profilePicture' className='block text-gray-700'>
              Profile Picture
            </label>
            <input
              type='file'
              id='profilePicture'
              name='profilePicture'
              onChange={handleChange}
              className='form-input mt-1 block w-full'
            />
            {data.profilePicture && (
              <img
                src={URL.createObjectURL(data.profilePicture)}
                alt='Profile'
                className='mt-2 h-20 w-20 object-cover rounded-full'
              />
            )}
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Sign Up
          </button>
        </form>
        <p className='mt-4'>
          Already have an account?{' '}
          <Link to='/signin' className='text-blue-500'>
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage
