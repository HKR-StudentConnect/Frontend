import React from 'react'
import { Link } from 'react-router-dom'
import introimage from '../../assets/intro.jpg'

const Welcome = () => {
  const quotes = [
    'Missing out the chill in your life? lets connect!',
    'Stay in loop and connect with Pears.',
    'your ulitmate social hub!.',
  ]

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className='bg-primary min-h-screen flex flex-col justify-center items-center'>
      <div className='bg-white rounded-full h-64 w-64  mb-8 flex justify-center items-center'>
        <img
          src={introimage}
          alt='myimage'
          className='h-full w-full object-cover rounded-full'
        />
      </div>
      <h1 className='text-2xl sm:text-3xl text-white font-bold mb-8'>
        Welcome to Student Connect
      </h1>
      <div className='flex'>
        <Link
          to='/register'
          className='bg-secondary hover:bg-background text-black font-bold py-4 px-12 sm:px-16 rounded-xl mr-4'
        >
          Sign Up
        </Link>
        <Link
          to='/login'
          className='bg-secondary hover:bg-blue-700 text-black font-bold py-4 px-12 sm:px-16 rounded-xl'
        >
          Sign In
        </Link>
      </div>

      <div className='mt-8 font-semibold italic text-background'>
        {randomQuote}
      </div>
    </div>
  )
}

export default Welcome
