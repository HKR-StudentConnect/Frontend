import React from 'react'
import PostsSection from '../../components/post/postsSection'
import FeedProfile from '../../components/feed/feedProfile'
import FeedRight from '../../components/feed/feedRight'
import PageLayout from '../../layouts/pageLayout'

const Home = () => {
  return (
    <PageLayout>
      <div className='flex justify-between p-4'>
        <div className='w-1/3 p-4'>
          <FeedProfile />
        </div>
        <div className='w-1/2 p-4'>
          <PostsSection />
        </div>
        <div className='p-4 w-2/5'>
          <FeedRight />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home
