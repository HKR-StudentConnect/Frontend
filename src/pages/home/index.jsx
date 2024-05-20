import React from 'react'
import PostsSection from '../../components/post/postsSection'
import FeedProfile from '../../components/feed/feedProfile'
import FeedRight from '../../components/feed/feedRight'
import PageLayout from '../../layouts/pageLayout'
import { useSelector } from 'react-redux'

const Home = () => {
  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <PageLayout>
      <div className='flex flex-col lg:flex-row justify-between lg:p-4'>
        <div className='w-full lg:w-1/3 hidden lg:block p-4'>
          <FeedProfile user={currentUser} />
        </div>
        <div className='w-full lg:w-1/2 p-4'>
          <PostsSection user={currentUser} />
        </div>
        <div className='w-full lg:w-2/5 hidden lg:block p-4'>
          <FeedRight />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home
