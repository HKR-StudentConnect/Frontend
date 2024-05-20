import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import logo from '../../assets/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import MenuItem from './menuItem'
import MobileMenuItem from './mobileMenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../store/actions/userActions'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const currentUser = useSelector(state => state.user.currentUser)

  const handleLogout = () => {
    dispatch(userLogout())
    navigate('/welcome')
  }

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search/${search}`)
    }
  }

  const handleKeyUp = e => {
    if (e.key === 'Enter' && search.trim()) {
      handleSearch()
    }
  }

  return (
    <header className='bg-primary'>
      <nav
        className='container mx-auto flex items-center justify-between p-8 lg:px-8'
        aria-label='Global'
      >
        <div className='flex'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <img src={logo} alt='SC' className='rounded-full h-14 w-14' />
          </Link>
        </div>
        <div className='flex xl:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-8 w-8' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden xl:flex'>
          <MenuItem title={'Home'} to={'/'} />
          <MenuItem title={'Notifications'} to={'/notifications'} />
          <MenuItem title={'Profile'} to={`/profile/${currentUser._id}`} />
          <MenuItem title={'Settings'} to={'/settings'} />
          <MenuItem title={'About'} to={'/about'} />
          <button
            className='text-lg font-semibold text-white hover:font-bold hover:text-secondary py-2 px-4'
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </Popover.Group>
        <div className='hidden xl:flex xl:justify-end'>
          <div className='flex border-2 border-white rounded overflow-hidden'>
            <input
              type='text'
              placeholder='Search a user...'
              className='px-4 py-2 w-80 text-black border-none'
              onKeyUp={handleKeyUp}
              onChange={e => setSearch(e.target.value)}
            />
            <button
              className='bg-secondary hover:bg-background px-4'
              onClick={handleSearch}
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
      </nav>
      <Dialog
        className='xl:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <img src={logo} alt='SC' className='rounded-full h-10 w-10' />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-secondary'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-secondary/50'>
              <div className='space-y-2 py-6'>
                <MobileMenuItem title={'Home'} to={'/'} />
                <MobileMenuItem title={'Notifications'} to={'/notifications'} />
                <MobileMenuItem
                  title={'Profile'}
                  to={`/profile/${currentUser._id}`}
                />
                <MobileMenuItem title={'Settings'} to={'/settings'} />
                <MobileMenuItem title={'About'} to={'/about'} />
                <button
                  className='-mx-3 w-full block rounded-lg px-3 py-2 text-left font-semibold leading-7 text-white hover:text-black hover:bg-secondary'
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
                <div className='flex border-2 border-white rounded overflow-hidden'>
                  <input
                    type='text'
                    placeholder='Search a user...'
                    className='px-4 py-2 w-80 text-black border-none'
                    onKeyUp={handleKeyUp}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button
                    className='bg-secondary hover:bg-background px-4'
                    onClick={handleSearch}
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
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
