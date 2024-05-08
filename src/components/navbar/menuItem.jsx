import React from 'react'

const MenuItem = ({ title }) => {
  return (
    <button className='text-lg font-medium text-white hover:font-bold hover:text-secondary py-2 px-4'>
      {title}
    </button>
  )
}

export default MenuItem
