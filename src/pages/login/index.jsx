import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import AuthInput from '../../components/auth/authInput'
import { useDispatch } from 'react-redux'
import { loginAndSetUser } from '../../store/actions/userActions'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [error, setError] = useState('')
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

    try {
      await dispatch(loginAndSetUser(formData.email, formData.password))
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className='bg-primary flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-20 w-auto' src={logo} alt='Your Company' />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={submit}>
            <AuthInput
              label={'Email address'}
              value={formData.email}
              onChangeText={handleChange}
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
            />

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-md font-medium leading-6 text-white'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  onChange={handleChange}
                  required
                  className='block w-full rounded-lg border-0 py-3 text-black placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-lg bg-secondary px-3 py-3 text-md font-semibold leading-6 text-black'
              >
                Sign in
              </button>
            </div>
          </form>

          {error && (
            <p className='mt-4 text-center text-md text-red font-semibold'>
              {error}
            </p>
          )}

          <p className='mt-10 text-center text-md text-white'>
            Don't have an account?
            <Link
              to='/register'
              className='font-semibold ml-1 leading-6 text-secondary'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
