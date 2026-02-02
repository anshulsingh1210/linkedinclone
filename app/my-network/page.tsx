import React from 'react'
import { Left } from '../_components/Left'
import NetworkPage from './_components/NetworkPage'

const MyNetwork = () => {
  return (
    <div className="flex ml-[200px] mt-6 ">
      <Left />
      <NetworkPage />
    </div>
  )
}

export default MyNetwork