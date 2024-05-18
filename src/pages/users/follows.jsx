import React, { useEffect, useState } from 'react'
import PageLayout from '../../layouts/pageLayout'
import UsersList from '../../components/profile/usersList'
import { getPublicUserInfo } from '../../api/user'
import { useSelector } from 'react-redux'

const Follows = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const [follows, setFollows] = useState([])

  useEffect(() => {
    const fetchFollows = async () => {
      const users = await Promise.all(
        currentUser.follows.map(async followeeId => {
          const data = await getPublicUserInfo(followeeId)
          return { ...data, _id: followeeId }
        })
      )
      setFollows(users)
    }

    fetchFollows()
  }, [currentUser.follows])

  return (
    <PageLayout>
      <div className='h-screen'>
        <div className=' p-12 text-center'>
          <p className='font-bold text-2xl'>Following</p>
        </div>
        <UsersList users={follows} />
      </div>
    </PageLayout>
  )
}

export default Follows
