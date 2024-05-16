import React from 'react'
import { MdDelete } from 'react-icons/md'

const CommentCard = ({ username, text, canDelete, onClick }) => {
  return (
    <div className='flex justify-between items-center px-2 py-1 mb-2'>
      <div>
        <span className='text-sm font-semibold mr-2'>{username}:</span>
        <span>{text}</span>
      </div>
      {canDelete ? (
        <div onClick={onClick}>
          <MdDelete className='text-red' />
        </div>
      ) : null}
    </div>
  )
}

export default CommentCard
