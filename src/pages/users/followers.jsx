import React, { useEffect, useState } from 'react'
import PageLayout from '../../layouts/pageLayout'
import UsersList from '../../components/profile/usersList'
import { useSelector } from 'react-redux'
import { getPublicUserInfo } from '../../api/user'

const Followers = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    const fetchFollows = async () => {
      const users = await Promise.all(
        currentUser.followers.map(async followerId => {
          const data = await getPublicUserInfo(followerId)
          return { ...data, _id: followerId }
        })
      )
      setFollowers(users)
    }

    fetchFollows()
  }, [currentUser.followers, currentUser.follows])

  return (
    <PageLayout>
      <div className='h-screen'>
        <div className=' p-12 text-center'>
          <p className='font-bold text-2xl'>Followers</p>
        </div>
        <UsersList users={followers} />
      </div>
    </PageLayout>
  )
}

export default Followers
