import React from 'react'
import PostsSection from '../../components/post/postsSection'
import FeedProfile from '../../components/feed/feedProfile'
import FeedRight from '../../components/feed/feedRight'

const Home = () => {
  return (
    <div className='bg-background'>
      <div className='container mx-auto flex-grow p-4'>
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
      </div>
    </div>
  )
}

export default Home
