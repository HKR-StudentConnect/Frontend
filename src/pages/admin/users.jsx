import React from 'react'
import AdminPageLayout from '../../layouts/adminPageLayout'
import AdminUsersList from '../../components/admin/usersList'

const AdminUserList = () => {
  return (
    <AdminPageLayout title={'Users'}>
      <div className='container mx-auto p-4'>
        <AdminUsersList />
      </div>
    </AdminPageLayout>
  )
}

export default AdminUserList
