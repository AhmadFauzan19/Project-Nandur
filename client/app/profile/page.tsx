import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
      <div className='bg-primary w-screen h-screen place-items-center flex lg:place-content-center'>
        <div className='bg-white flex flex-col w-fit h-fit mx-12 rounded-xl p-8'>
          <div>
            <Image src='/profile.png' alt='profile' width={300} height={300}></Image>
          </div>
          <div>John</div>
          <div>johndoe@gmail.com</div>
          <div>Level 1</div>
        </div>l
      </div>
  )
}

export default page
