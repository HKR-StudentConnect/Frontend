import React, { useEffect, useState } from 'react'
import PageLayout from '../../layouts/pageLayout'
import UsersList from '../../components/profile/usersList'
import { getPublicUserInfo } from '../../api/user'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useCallback } from 'react'

const Follows = () => {
  const { userId } = useParams()
  const currentUser = useSelector(state => state.user.currentUser)
  const [follows, setFollows] = useState([])

  const fetchFollows = useCallback(async userIds => {
    const users = await Promise.all(
      userIds.map(async followeeId => {
        const data = await getPublicUserInfo(followeeId)
        return data
      })
    )
    setFollows(users)
  }, [])

  useEffect(() => {
    const loadFollows = async () => {
      if (userId === currentUser._id) {
        await fetchFollows(currentUser.follows)
      } else {
        const user = await getPublicUserInfo(userId)
        await fetchFollows(user.follows)
      }
    }

    loadFollows()
  }, [currentUser._id, currentUser.follows, fetchFollows, userId])

  return (
    <PageLayout>
      <div className='h-screen'>
        <div className='p-8 md:p-12 text-center'>
          <p className='font-bold text-2xl'>Following</p>
        </div>
        <UsersList users={follows} />
      </div>
    </PageLayout>
  )
}

export default Follows
