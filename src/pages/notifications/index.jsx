import React, { useState, useEffect } from 'react'
import PageLayout from '../../layouts/pageLayout'
import { useSelector } from 'react-redux'
import { getNotifications } from '../../api/notification'
import { formatDate } from '../../utils/dateFormatter'
import ProfilePicture from '../../components/user/profilePicture'

const Notifications = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const [notifications, setNotifications] = useState()

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getNotifications(currentUser._id)
        if (response.status === 200) {
          const data = await response.data
          console.log(data)
          setNotifications(data)
        } else {
          console.error('Failed to fetch notifications:', response.statusText)
        }
      } catch (error) {
        console.error('Error fetching notifications:', error)
      }
    }

    fetchNotifications()
  })

  return (
    <PageLayout>
      {!notifications ? (
        <div className='text-center'>Loading...</div>
      ) : (
        <div className='container max-w-4xl mx-auto mt-10'>
          <h1 className='text-3xl font-semibold mb-4'>Notifications</h1>
          <div className='divide-y divide-gray-300'>
            {notifications.map(notification => (
              <div key={notification._id} className='bg-white p-6 rounded-xl'>
                <div className='flex items-center justify-between'>
                  <div className='flex'>
                    <ProfilePicture
                      imageUrl={
                        notification.sender.profile.profilePictureUrl ?? null
                      }
                      width={10}
                      height={10}
                    />
                    <p className='py-2 text-lg'>
                      <strong>{notification.sender.username}</strong> started
                      following you
                    </p>
                  </div>
                  <p className='text-sm font-semibold text-gray-500'>
                    {formatDate(notification.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  )
}

export default Notifications
