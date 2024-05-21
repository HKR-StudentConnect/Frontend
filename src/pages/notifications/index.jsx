import React, { useState, useEffect } from 'react'
import PageLayout from '../../layouts/pageLayout'
import { useSelector } from 'react-redux'
import { getNotifications } from '../../api/notification'
import { formatDate } from '../../utils/dateFormatter'
import ProfilePicture from '../../components/user/profilePicture'
import Loading from '../../components/loading'

const Notifications = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const [notifications, setNotifications] = useState()

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getNotifications(currentUser._id)
        if (response.status === 200) {
          const data = await response.data
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
        <Loading />
      ) : (
        <div className='container max-w-4xl mx-auto p-3 md:p-10'>
          <h1 className='text-2xl md:text-3xl font-semibold mb-4'>
            Notifications
          </h1>
          <div className='flex flex-col space-y-4'>
            {notifications.map(notification => (
              <div
                key={notification._id}
                className='bg-white p-4 md:p-6 rounded-xl'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex'>
                    <ProfilePicture
                      imageUrl={
                        notification.sender?.profile?.profilePictureUrl || null
                      }
                      className={'w-10 h-10 mr-4'}
                    />
                    <p className='py-2 text-sm md:text-lg'>
                      <strong>{notification.sender.username}</strong> started
                      following you
                    </p>
                  </div>
                  <p className='text-sm font-semibold text-black'>
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
