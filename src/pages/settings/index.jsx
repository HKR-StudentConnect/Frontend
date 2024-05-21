import React, { useState, useEffect } from 'react'
import PageLayout from '../../layouts/pageLayout'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserAction, userLogout } from '../../store/actions/userActions'
import { deleteUser } from '../../api/user'

const Settings = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    name: '',
    phoneNumber: '',
    email: '',
    university: '',
    profilePictureUrl: '',
  })

  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username || '',
        bio: currentUser.profile.bio || '',
        name: currentUser.profile.name || '',
        phoneNumber: currentUser.phoneNumber || '',
        email: currentUser.email || '',
        university: currentUser.profile.university || '',
        profilePictureUrl: currentUser.profile.profilePictureUrl || '',
      })
    }
  }, [currentUser])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      username: formData.username,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      profile: {
        name: formData.name,
        university: formData.university,
        profilePictureUrl: formData.profilePictureUrl,
        bio: formData.bio,
      },
    }
    console.log('Form submitted:', data)
    dispatch(updateUserAction(currentUser._id, data))
    setSuccessMessage('User updated successfully!')
  }

  const handleDelete = async e => {
    e.preventDefault()
    const response = await deleteUser(currentUser._id)
    if (response.status === 200) {
      dispatch(userLogout())
    } else {
      setSuccessMessage('Error delete using account')
    }
  }

  return (
    <PageLayout>
      <div className='max-w-4xl mx-auto mt-2 md:mt-4 p-4 md:p-8'>
        <h1 className='text-2xl md:text-3xl font-bold mb-8'>
          Account Settings
        </h1>
        {successMessage && (
          <div
            className='mb-4 p-4 text-md font-semibold text-white bg-gray rounded-lg'
            role='alert'
          >
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className='space-y-12'>
            <div className='border-b border-primary pb-12'>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Username
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <input
                        type='text'
                        name='username'
                        id='username'
                        autoComplete='username'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        placeholder='username'
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='profilePictureUrl'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Profile Image Url
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='profilePictureUrl'
                      id='profilePictureUrl'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      value={formData.profilePictureUrl}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='bio'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Bio
                  </label>
                  <div className='mt-2'>
                    <textarea
                      id='bio'
                      name='bio'
                      rows={3}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      value={formData.bio}
                      onChange={handleChange}
                    />
                  </div>
                  <p className='mt-3 text-sm leading-6 text-gray-600'>
                    Write a few sentences about yourself.
                  </p>
                </div>
              </div>
            </div>

            <div className='pb-4'>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='phoneNumber'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Phone Number
                  </label>
                  <div className='mt-2'>
                    <input
                      type='tel'
                      name='phoneNumber'
                      id='phoneNumber'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='university'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    University
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='university'
                      id='university'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      value={formData.university}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              onClick={handleDelete}
              className='rounded-md bg-red px-8 py-2 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Delete Profile
            </button>
            <button
              type='submit'
              className='rounded-md bg-primary px-8 py-2 text-md font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  )
}

export default Settings
