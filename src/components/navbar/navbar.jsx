import React from 'react'
import MenuItem from './menuItem'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-primary'>
      <div className='container mx-auto flex-grow px-12 py-6'>
        <div className='flex justify-between items-center'>
          <div>
            <img src={logo} alt='John Doe' className='rounded-full h-16 w-16' />
          </div>
          <div className='flex gap-2'>
            <MenuItem title={'Home'} to={'/'} />
            <MenuItem title={'Notifications'} to={'notifications'} />
            <MenuItem title={'My Profile'} to={'profile'} />
            <MenuItem title={'Settings'} to={'settings'} />
            <MenuItem title={'Sign Out'} />
          </div>
          <div className='flex border-2 border-white rounded overflow-hidden'>
            <input
              type='text'
              placeholder='Search...'
              className='px-4 py-2 w-80 text-black border-none'
              onKeyUp={e => {
                if (e.key === 'Enter') console.log(e.target.value)
              }}
            />
            <button
              className='bg-secondary hover:bg-background px-4'
              onClick={() => console.log('Search initiated')}
            >
              <svg
                className='w-5 h-5 text-black'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
