import React from 'react'
import PostsSection from '../../components/post/postsSection'
import FeedProfile from '../../components/feed/feedProfile'
import FeedRight from '../../components/feed/feedRight'
import PageLayout from '../../layouts/pageLayout'
import Chat from '../chat/chat'
import { useSelector } from 'react-redux'

const Home = () => {
  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <PageLayout>
      <div className='flex justify-between p-4'>
        <div className='w-1/3 p-4'>
          <FeedProfile user={currentUser} />
        </div>
        <div className='w-1/2 p-4'>
          <PostsSection user={currentUser} />
        </div>
        <div className='p-4 w-2/5'>
          <FeedRight />
        </div>
      </div>
    </PageLayout>
    
  )
}

export default Home
