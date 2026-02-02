import React from 'react'
import Image from 'next/image'
import NewPost from './NewPost'
import Posts from './Posts'

export const Center = () => {
  return (
    <div className='  ml-4 w-[650px] mr-4'>
      <NewPost />

      <Posts />
      <Posts />
    </div>
  )
}

export default Center