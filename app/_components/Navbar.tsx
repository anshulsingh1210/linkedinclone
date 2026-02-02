import React from 'react'
// import linkedin from "../images/LinkedIn_logo_initials.png"
import Image from "next/image";
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='h-[100%] ml-[100px] flex items-center justify-between '>
        <div className=''>
            {/* <img src={"../images/LinkedIn_logo_initials.png"} alt='linkedin logo w-[10px] h-[10px]' /> */}
            <Image
                src="/images/LinkedIn_logo_initials.png"
                alt="linkedin logo"
                width={30}
                height={30} 
                // className='mr-6'
            />
        </div>
        

        <div className='w-[600px] flex justify-evenly text-white '>
            <Link href="/"> 
              <div className='bg-blue-600 hover:bg-blue-700 hover:cursor-pointer mr-2 p-1.5 rounded-xl'>Home</div>
            </Link>
            <Link href="my-network">
              <div className='bg-blue-600 hover:bg-blue-700 hover:cursor-pointer mr-2 p-1.5 rounded-xl'>My Network</div>
            </Link>
            <Link href="notifications">
              <div className='bg-blue-600 hover:bg-blue-700 hover:cursor-pointer mr-2 p-1.5 rounded-xl'>Notifications</div>
            </Link>
            <Link href="me">
              <div className='bg-blue-600 hover:bg-blue-700 hover:cursor-pointer mr-2 p-1.5 rounded-xl'>Me</div>
            </Link>
            <div className='bg-blue-600 hover:bg-blue-700 hover:cursor-pointer mr-2 p-1.5 rounded-xl'>Log Out</div>
        </div>
    </div>
  )
}
