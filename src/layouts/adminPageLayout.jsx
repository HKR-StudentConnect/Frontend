import React from 'react'
import AdminNavbar from '../components/admin/navbar'

const AdminPageLayout = ({ title, children }) => {
  return (
    <>
      <div className='min-h-full'>
        <AdminNavbar />
        <header className='bg-white shadow'>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold tracking-tight text-black'>
              {title}
            </h1>
          </div>
        </header>
        <main>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default AdminPageLayout
