import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='bg-background'>
        <div className='container mx-auto flex-grow p-4'>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default PageLayout
