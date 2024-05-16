import React from 'react'
import PageLayout from '../../layouts/pageLayout'
import { useSelector } from 'react-redux'
import Header from '../../components/profile/header'
import PostsGrid from '../../components/profile/postsGrid'

const Profile = () => {
  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <PageLayout>
      <div className='max-w-6xl mx-auto mt-8 p-4 rounded-2xl'>
        <Header user={currentUser} />
        <PostsGrid posts={currentUser.posts} />
      </div>
    </PageLayout>
  )
}

export default Profile
