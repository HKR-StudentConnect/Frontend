import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold mb-8">Welcome to Student Connect</h1>
      <p className="mb-8">your ultimate social hub!</p>
      <div className="flex space-x-4">
        <Link to="/register">
          <button className="bg-secondary hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-secondary hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </Link>
        <Link to="/admin-login">
          <button className="bg-secondary hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Log In as Admin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

