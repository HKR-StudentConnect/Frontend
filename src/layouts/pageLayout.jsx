import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='bg-background min-h-screen overflow-hidden'>
        <div className='container mx-auto flex-grow p-2 md:p-4 overflow-hidden'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PageLayout
