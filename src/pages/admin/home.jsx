import React, { useEffect, useState } from 'react'
import AdminPageLayout from '../../layouts/adminPageLayout'
import { getDashboardStats } from '../../api/admin'
import AdminStats from '../../components/admin/stats'
import AdminUserList from '../../components/admin/usersList'

export default function Admin() {
  const [stats, setStats] = useState(null)

  async function getDashboardStat() {
    const response = await getDashboardStats()
    if (response.status === 200) {
      setStats(response.data)
    }
  }

  useEffect(() => {
    getDashboardStat()
  }, [])

  if (!stats) {
    return <div>Loading...</div>
  }

  return (
    <AdminPageLayout title={'Dashboard'}>
      <div className='container mx-auto p-4 flex-col space-y-10'>
        <AdminStats stats={stats} />
        <div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-6 pl-4'>Users</h2>
          <AdminUserList />
        </div>
      </div>
    </AdminPageLayout>
  )
}
