import React from 'react'
import Image from 'next/image'

const NotificationsPage = () => {
  return (
    <div className='ml-4 p-4 shadow-xl rounded-xl w-[900px] border-1 border-[#dedee0]'>
        <h1 className='font-bold text-2xl'>Notifications</h1>

        <div className='flex justify-between items-center mt-4 shadow-lg pb-4 pt-2 border-1 border-[#dedee0] rounded-xl active:border-blue-600'>
            <div className='ml-1 flex items-center h-auto'>
                <div className='mr-2'>
                    <Image
                        src="/images/blank-profile-picture.png"
                        alt="profile"
                        width={60}
                        height={60}
                        className="rounded-full border-4 h-[60px] border-white object-cover"
                    />
                </div>
                <div>
                    <div className='text-lg mb-0'>Name commented on your post</div>
                    <div className='text-[#7e7e7f] text-[12px] mt-0 mb-0'> 10 mins ago</div>

                    <div className='mt-2 bg-[#eaeaec] p-1 rounded-md flex items-center'>
                        <Image
                            src="/images/background.jpg"
                            alt="profile"
                            width={50}
                            height={50}
                            className="  h-[60px]  object-cover"
                        />
                        <p className='ml-2'>
                            postDescription: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mr-2 flex'>
                <button className='bg-blue-500 text-white p-1.5 flex justify-center items-center rounded-xl'>Read</button>
                <button className='bg-red-500 text-white p-1.5 flex justify-center items-center rounded-xl ml-2'>Delete</button>
            </div>
        </div>

        <div className='flex justify-between items-center mt-4 shadow-lg pb-4 pt-2 border-1 border-[#dedee0] rounded-xl active:border-blue-600'>
            <div className='ml-1 flex items-center h-auto'>
                <div className='mr-2'>
                    <Image
                        src="/images/blank-profile-picture.png"
                        alt="profile"
                        width={60}
                        height={60}
                        className="rounded-full border-4 h-[60px] border-white object-cover"
                    />
                </div>
                <div>
                    <div className='text-lg mb-0'>Name liked on your post</div>
                    <div className='text-[#7e7e7f] text-[12px] mt-0 mb-0'> 10 mins ago</div>

                    <div className='mt-2 bg-[#eaeaec] p-1 rounded-md flex items-center'>
                        <Image
                            src="/images/background.jpg"
                            alt="profile"
                            width={50}
                            height={50}
                            className="  h-[60px]  object-cover"
                        />
                        <p className='ml-2'>
                            postDescription: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mr-2 flex'>
                <button className='bg-blue-500 text-white p-1.5 flex justify-center items-center rounded-xl'>Read</button>
                <button className='bg-red-500 text-white p-1.5 flex justify-center items-center rounded-xl ml-2'>Delete</button>
            </div>
        </div>

        <div className='flex justify-between items-center mt-4 shadow-lg pb-4 pt-2 border-1 border-[#dedee0] rounded-xl active:border-blue-600'>
            <div className='ml-1 flex items-center h-auto'>
                <div className='mr-2'>
                    <Image
                        src="/images/blank-profile-picture.png"
                        alt="profile"
                        width={60}
                        height={60}
                        className="rounded-full border-4 h-[60px] border-white object-cover"
                    />
                </div>
                <div>
                    <div className='text-lg mb-0'>Name accepted your connection request</div>
                    <div className='text-[#7e7e7f] text-[12px] mt-0 mb-0'> 10 mins ago</div>

                    
                </div>
            </div>
            <div className='mr-2 flex'>
                <button className='bg-blue-500 text-white p-1.5 flex justify-center items-center rounded-xl'>Read</button>
                <button className='bg-red-500 text-white p-1.5 flex justify-center items-center rounded-xl ml-2'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default NotificationsPage