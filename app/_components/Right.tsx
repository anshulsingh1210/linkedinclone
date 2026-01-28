import React from 'react'
import Image from 'next/image'

export const Right = () => {
  return (
    <div className='shadow-2xl w-[275px] p-2.5 bg-white h-[275px]'>
      <h3 className='mb-2 text-[#7c7d7e]'>People you may know</h3>

      <div className='flex shadow-lg p-2'>
        <Image
          src="/images/blank-profile-picture.png"
          alt="profile"
          width={50}
          height={50}
          className="mr-1 rounded-full border-4 border-white"
        />
        <div className=' w-[45%] ml-1'>
          <div className='text-lg'>Name</div>
          <div className='text-sm text-[#aeafb0]'>Headline</div>
        </div>
        <div className=' w-[35%] ml-1 flex items-center justify-center'>
          <button className='bg-blue-600 text-white p-1 rounded-xl'>Connect</button>
        </div>
      </div>

      <div className='flex shadow-lg p-2'>
        <Image
          src="/images/blank-profile-picture.png"
          alt="profile"
          width={50}
          height={50}
          className="mr-1 rounded-full border-4 border-white"
        />
        <div className=' w-[45%] ml-1'>
          <div className='text-lg'>Name</div>
          <div className='text-sm text-[#aeafb0]'>Headline</div>
        </div>
        <div className=' w-[35%] ml-1 flex items-center justify-center'>
          <button className='bg-blue-600 text-white p-1 rounded-xl'>Connect</button>
        </div>
      </div>

      <div className='flex shadow-lg p-2'>
        <Image
          src="/images/blank-profile-picture.png"
          alt="profile"
          width={50}
          height={50}
          className="mr-1 rounded-full border-4 border-white"
        />
        <div className=' w-[45%] ml-1'>
          <div className='text-lg'>Name</div>
          <div className='text-sm text-[#aeafb0]'>Headline</div>
        </div>
        <div className=' w-[35%] ml-1 flex items-center justify-center'>
          <button className='bg-green-600 text-white rounded-2xl ml-2 w-[30px] h-[30px] flex justify-center items-center'>
            -/
          </button>
          <button className='bg-red-600 text-white rounded-2xl w-[30px] h-[30px] flex justify-center items-center'>
            x
          </button>
        </div>
      </div>
      
    </div>
  )
}
