import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenuItem = ({ title, to }) => {
  return (
    <Link
      to={to}
      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-black hover:bg-secondary'
    >
      {title}
    </Link>
  )
}

export default MobileMenuItem
