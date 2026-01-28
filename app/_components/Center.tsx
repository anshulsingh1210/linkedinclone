import React from 'react'
import Image from 'next/image'

export const Center = () => {
  return (
    <div className='  ml-4 w-[650px] mr-4'>
      <div className='h-[150px] mb-1.5 shadow-2xl'>
        <div className='flex pt-2 '>
          <Image
            src="/images/blank-profile-picture.png"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full border-4 h-[50px] border-white object-cover"
          />
          {/* <label>Whats</label> */}
          {/* <input type='textarea' placeholder="What's on your mind?" className=' focus:outline-none focus:shadow-xl align-top leading-normal bg-[#e6ebf2] text-[#808182] border-1 border-[#e6ebf2] h-[80px] w-[90%] ml-2 rounded-xl' ></input> */}
          <textarea
            placeholder="What's on your mind?"
            className='focus:outline-none focus:shadow-xl bg-[#e6ebf2] text-[#808182] border border-[#e6ebf2] h-[80px] w-[90%] ml-1 rounded-xl p-3 resize-none'
          ></textarea>
        </div>

        <div className=' h-[30px] flex justify-between items-center mt-4'>
          <div className='ml-4'>Photo</div>
          <button className='mr-4 bg-blue-600 text-white p-2 rounded-md'>Submit</button>
        </div>

      </div>
      <div>Bottom</div>
    </div>
  )
}

export default Center