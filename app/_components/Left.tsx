import React from 'react'
import Image from 'next/image'

export const Left = () => {
  return (
    <div className='w-[300px] h-[400px] shadow-2xl '>
      <div className='relative ml-5 mr-5 mt-2 h-[80px] p-4 rounded-xl'>
        {/* Cover Image */}
        <Image
          src="/images/background.jpg"
          alt="cover"
          width={1000}
          height={80}
          className="w-full h-[70px] z-0 rounded-t-xl"
        />

        {/* Profile Image */}
        <div className="absolute left-22 -bottom-10">
          <Image
            src="/images/blank-profile-picture.png"
            alt="profile"
            width={80}
            height={80}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className='p-4 border-b-1 border-[#e6ebf2] ml-5 mr-5 mt-6 flex flex-col items-center'>
        <div className='pl-4 pr-4 mt-2 text-xl mb-0'>Name</div>
        <div className='pl-4 pr-4  text-[#aeafb0] text-[14px] mt-0 mb-0'>Headline</div>
        <div className='pl-4 pr-4 text-[#aeafb0] text-[14px] mt-0 mb-0'>10 connections</div>
      </div>
      <div className='p-4 border-b-1 border-[#e6ebf2] ml-5 mr-5'>
        <div className='ml-2 mb-2 text-[#7f8081]'>Home</div>
        <div className='ml-2 mb-2 text-[#7f8081]'>My Network</div>
        <div className='ml-2 text-[#7f8081]'>Notifications</div>
      </div>
    </div>
  )
}
