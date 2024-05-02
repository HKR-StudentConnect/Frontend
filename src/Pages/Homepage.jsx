import React from 'react';
import { Link } from 'react-router-dom';
import introimage from '../assets/intro.jpg';

const Homepage = () => {
  const quotes = [
    "Missing out the chill in your life? lets connect!",
    "Stay in loop and connect with Pears.",
    "your ulitmate social hub!."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className='bg-green-400 min-h-0 pt-32 flex flex-col justify-center items-center'>
      <div className='bg-white rounded-full h-64 w-64 flex justify-center items-center'>
        <img src = {introimage} alt="myimage" className='h-full w-full object-cover rounded-full' />
      </div>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Student Connect</h1>
      <div className='mt-4'>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Sign Up</Link>
        <Link to="/signin" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Log In</Link>
      </div>
 
      <div className='mt-4 italic'>{randomQuote}</div>
    </div>
  );
};

export default Homepage;
