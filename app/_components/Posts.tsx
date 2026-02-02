import React from 'react'
import Image from 'next/image'

const Posts = () => {
  return (
    <div className='shadow-lg mt-4 pb-1 rounded-xl'>
        <div className='flex justify-between items-center mt-2'>
            <div className='ml-1 flex items-center'>
                <span className='mr-2'>
                <Image
                    src="/images/blank-profile-picture.png"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full border-4 h-[50px] border-white object-cover"
                />
                </span>
                <span>
                <div className='text-lg mb-0'>Name</div>
                <div className='text-[#7e7e7f] text-[12px] mt-0 mb-0'>Headline</div>
                <div className='text-[#7e7e7f] text-[12px] mt-0'>Time</div>
                </span>
            </div>
            <button className='mr-2 bg-red-500 text-white p-1 rounded-xl'>Delete</button>
        </div>
        <div className='text-[#464647] text-sm ml-2 mr-2 mt-2'>postDescription: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis! Vero qui minus dolorem tenetur cum corporis eligendi.</div>
            <Image
                src="/images/background.jpg"
                alt="profile"
                width={600}
                height={800}
                style={{width: "calc(100% - 10px)"}}
                className="rounded-md border-1 h-[400px] ml-[5px] mr-[5px] mt-1 border-white object-cover"
            />
            <div className='flex justify-between items-center text-[#7e7e7f] mt-1.5 mb-2'>
            <div className='ml-4'>Like(2)</div>
            <div className='mr-4'>Comment(1)</div>
        </div>
    </div>
  )
}

export default Posts