import React from 'react'
import Image from 'next/image'

const ConnectionRequest = () => {
  return (
    <div className='flex justify-between items-center shadow-lg mt-2 p-2'>
        <div className='ml-1 flex items-center'>
            <span className='mr-2'>
                <Image
                    src="/images/blank-profile-picture.png"
                    alt="profile"
                    width={60}
                    height={60}
                    className="rounded-full border-4 h-[60px] border-white object-cover"
                />
            </span>
            <span>
                <div className='text-lg mb-0'>Name</div>
                <div className='text-[#7e7e7f] text-[12px] mt-0 mb-0'>Headline</div>
            </span>
        </div>
        <div>
            <button className='bg-blue-500 text-white p-2 rounded-xl cursor-pointer'>Accept</button>
            <button className='bg-[#c6c8ca] text-[#9c9c9d] p-2 rounded-xl ml-2 cursor-pointer'>Reject</button>
        </div>
    </div>
  )
}

export default ConnectionRequest