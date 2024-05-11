import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ title, to }) => {
  return (
    <Link
      to={to}
      className='text-lg font-semibold text-white hover:font-bold hover:text-secondary py-2 px-4'
    >
      {title}
    </Link>
  )
}

export default MenuItem
