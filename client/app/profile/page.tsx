import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
      <div className='bg-primary w-screen h-screen place-items-center flex lg:place-content-center'>
        <div className='bg-white flex flex-col w-fit h-fit mx-12 rounded-xl p-8'>
          <div>
            <Image src='/profile.png' alt='profile' width={300} height={100}></Image>
          </div>
          <div className='flex flex-col place-items-center w-full'>
            <div className='roboto text-black text-3xl font-bold'>John</div>
            <div className='roboto text-black text-xl'>johndoe@gmail.com</div>
            <div className='roboto text-black mt-8'>Level 1</div>
          </div>
          
        </div>
      </div>
  )
}

export default page
