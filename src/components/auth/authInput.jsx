import React from 'react'

const AuthInput = ({ label, value, onChangeText, ...textInputConfig }) => {
  return (
    <div>
      <label
        htmlFor='email'
        className='block text-md font-medium leading-6 text-white'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          value={value}
          onChange={onChangeText}
          {...textInputConfig}
          className='block w-full rounded-lg border-0 py-3 text-black placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
        />
      </div>
    </div>
  )
}

export default AuthInput
