import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import AuthInput from '../../components/auth/authInput'
import { useDispatch } from 'react-redux'
import { registerAndSetUser } from '../../store/actions/userActions'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
  const [error, setError] = useState('')

  const handleChange = event => {
    if (event.target.name === 'profilePicture') {
      setData({ ...data, profilePicture: event.target.files[0] })
    } else {
      const { name, value } = event.target
      setData({ ...data, [name]: value })
    }
  }

  async function submit(event) {
    event.preventDefault()

    const obj = {
      username: data.username,
      email: data.email,
      phoneNumber: data.phone,
      password: data.password,
      profile: {
        name: data.name,
      },
    }
    console.log('Form submitted:', JSON.stringify(obj))

    try {
      await dispatch(registerAndSetUser(obj))
      navigate('/')
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  return (
    <>
      <div className='bg-primary flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-20 w-auto' src={logo} alt='Your Company' />
          <h2 className='mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Create your account
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={submit}>
            <AuthInput
              label={'Name'}
              value={data.name}
              onChangeText={handleChange}
              type='text'
              id='name'
              name='name'
              required
            />

            <AuthInput
              label={'Username'}
              value={data.username}
              onChangeText={handleChange}
              type='text'
              id='username'
              name='username'
              required
            />

            <AuthInput
              label={'Email'}
              value={data.email}
              onChangeText={handleChange}
              id='email'
              name='email'
              type='email'
              required
            />

            <AuthInput
              label={'Phone number'}
              value={data.phone}
              onChangeText={handleChange}
              id='phone'
              name='phone'
              type='tel'
              required
            />

            <AuthInput
              label={'Password'}
              value={data.password}
              onChangeText={handleChange}
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
            />

            {/* <AuthInput
              label={'Profile Picture'}
              onChangeText={handleChange}
              type='file'
              id='profilePicture'
              name='profilePicture'
            />
            {data.profilePicture && (
              <img
                src={URL.createObjectURL(data.profilePicture)}
                alt='Profile'
                className='mt-2 h-20 w-20 object-cover rounded-full'
              />
            )} */}

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-lg bg-secondary px-3 py-3 text-md font-semibold leading-6 text-black'
              >
                Sign up
              </button>
            </div>
          </form>

          {error && (
            <p className='mt-4 text-center text-md text-red font-semibold'>
              {error}
            </p>
          )}

          <p className='mt-10 text-center text-md text-white'>
            Already have an account?
            <Link
              to='/login'
              className='font-semibold ml-1 leading-6 text-secondary'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
