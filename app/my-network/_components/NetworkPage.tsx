import React from 'react'
import Image from 'next/image'
import ConnectionRequest from './ConnectionRequest'

const NetworkPage = () => {
  return (
    <div className='w-[900px] h-auto ml-4 shadow-lg p-4 border-1 border-[#dedee0] rounded-xl'>
        <h1 className='text-2xl font-semibold mb-4'>My Network</h1>
        <div>
            <h3>Connection Request</h3>
            
            <ConnectionRequest />

            <ConnectionRequest />

            <ConnectionRequest />
        </div>
    </div>
  )
}

export default NetworkPage