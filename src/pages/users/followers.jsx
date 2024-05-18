import React, { useCallback, useEffect, useState } from 'react'
import PageLayout from '../../layouts/pageLayout'
import UsersList from '../../components/profile/usersList'
import { useSelector } from 'react-redux'
import { getPublicUserInfo } from '../../api/user'
import { useParams } from 'react-router-dom'

const Followers = () => {
  const { userId } = useParams()
  const currentUser = useSelector(state => state.user.currentUser)
  const [followers, setFollowers] = useState([])

  const fetchFollowers = useCallback(async userIds => {
    const users = await Promise.all(
      userIds.map(async followerId => {
        const data = await getPublicUserInfo(followerId)
        return data
      })
    )
    setFollowers(users)
  }, [])

  useEffect(() => {
    const loadFollows = async () => {
      if (userId === currentUser._id) {
        await fetchFollowers(currentUser.followers)
      } else {
        const user = await getPublicUserInfo(userId)
        await fetchFollowers(user.followers)
      }
    }

    loadFollows()
  }, [
    currentUser._id,
    currentUser.followers,
    currentUser.follows,
    fetchFollowers,
    userId,
  ])

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
