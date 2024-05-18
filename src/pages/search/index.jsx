//frontend/src/pages/search/index.jsx
import React, { useEffect, useState } from 'react'
import PageLayout from '../../layouts/pageLayout'
import { useParams } from 'react-router-dom'
import UserCard from '../../components/user/userCard'
import { getUsersByUsername } from '../../api/user'

const Search = () => {
  const { query } = useParams()
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const users = await getUsersByUsername(query)
      setUsers(users)
    }
    getUsers()
  }, [query, users])

  if (!users || users.length === 0) {
    return (
      <PageLayout>
        <div className='h-screen p-12 text-center'>
          <p className='font-bold text-2xl'>No results found for "{query}"</p>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className='h-screen'>
        <div className=' p-12 text-center'>
          <p className='font-bold text-2xl'>Results for "{query}"</p>
        </div>
        <div className='w-1/2 m-auto flex flex-col space-y-2'>
          {users.map(user => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default Search
