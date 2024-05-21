import React, { useEffect, useState } from 'react'
import AdminPageLayout from '../../layouts/adminPageLayout'
import { getAllPosts, deleteUserPost } from '../../api/admin'
import PostComponent from '../../components/admin/postComponent'
import Loading from '../../components/loading'

const AdminPostList = () => {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const response = await getAllPosts()
    if (response.status === 200) {
      setPosts(response.data)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async postId => {
    const response = await deleteUserPost(postId)
    if (response.status === 200) {
      setPosts(posts.filter(post => post._id !== postId))
    }
  }

  return (
    <AdminPageLayout title={'Posts'}>
      <div className='container mx-auto p-4'>
        {!posts ? (
          <Loading />
        ) : (
          posts.map(post => (
            <PostComponent key={post._id} post={post} onDelete={handleDelete} />
          ))
        )}
      </div>
    </AdminPageLayout>
  )
}

export default AdminPostList
