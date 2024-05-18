import React, { useEffect, useState } from 'react'
import PageLayout from '../../layouts/pageLayout'
import { useSelector } from 'react-redux'
import ProfileHeader from '../../components/profile/profileHeader'
import PostsGrid from '../../components/profile/postsGrid'
import { useParams } from 'react-router-dom'
import { getPublicUserInfo } from '../../api/user'

const Profile = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const currentUser = useSelector(state => state.user.currentUser)

  useEffect(() => {
    const fetchUser = async () => {
      if (userId === currentUser._id) {
        setUser(currentUser)
      } else {
        const fetchedUser = await getPublicUserInfo(userId)
        setUser(fetchedUser)
      }
    }

    fetchUser()
  }, [userId, currentUser])

  if (!user) {
    return <div>loading...</div>
  }

  return (
    <PageLayout>
      <div className='max-w-4xl mx-auto mt-8 p-4 rounded-2xl'>
        <ProfileHeader user={user} />
        <PostsGrid user={user} isCurrentUser={userId === currentUser._id} />
      </div>
    </PageLayout>
  )
}

export default Profile
