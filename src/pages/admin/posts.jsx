import React, { useEffect, useState } from 'react'
import AdminPageLayout from '../../layouts/adminPageLayout'
import { getAllPosts, deleteUserPost } from '../../api/admin'
import PostComponent from '../../components/admin/postComponent'

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
      setPosts(posts.filter(post => post.id !== postId))
    }
  }

  return (
    <AdminPageLayout title={'Posts'}>
      <div className='container mx-auto p-4'>
        {posts.length > 0 ? (
          posts.map(post => (
            <PostComponent key={post.id} post={post} onDelete={handleDelete} />
          ))
        ) : (
          <div>No posts available</div>
        )}
      </div>
    </AdminPageLayout>
  )
}

export default AdminPostList
