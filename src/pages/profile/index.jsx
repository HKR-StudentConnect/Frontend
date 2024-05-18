import React from 'react'
import PageLayout from '../../layouts/pageLayout'
import { useSelector } from 'react-redux'
import ProfileHeader from '../../components/profile/profileHeader'
import PostsGrid from '../../components/profile/postsGrid'

const Profile = () => {
  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <PageLayout>
      <div className='max-w-4xl mx-auto mt-8 p-4 rounded-2xl'>
        <ProfileHeader user={currentUser} />
        <PostsGrid user={currentUser} />
      </div>
    </PageLayout>
  )
}

export default Profile
