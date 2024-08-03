import React from 'react'
import Image from 'next/image';

const hero = () => {
  return (
    <div className="w-screen flex flex-col h-screen bg-primary">
      <nav className='flex justify-between px-12 py-12 lg:px-48'>
        <div className='flex flex-row'>
          <Image src='/logo_nandur.png' alt='nandur logo' width={100} height={100} className='lg:hidden'></Image> 
          <Image src='/logo_nandur.png' alt='nandur logo' width={120} height={120} className='lg:flex hidden'></Image> 
          <h1 className='text-white righteous text-6xl content-center hidden lg:flex items-center lg:ml-8'>Nandur</h1> 
        </div>
        <h1 className='text-white righteous text-5xl content-center lg:hidden'>Nandur</h1> 
        <div className='hidden lg:flex content-center'>
          <ul className='flex flex-row gap-24'>
            <li className='roboto text-white content-center lg:text-xl'>Home</li>
            <li className='roboto text-white content-center lg:text-xl'>Profile</li>
            <li className='roboto text-white content-center lg:text-xl'>Products</li>
            <li className='roboto text-white content-center lg:text-xl'>Guide</li>
            <li className='content-center'>
              <a href='#'>
                <Image src='/logo_profile.png' alt='profile logo' width={30} height={30} className='hidden lg:flex'></Image>
                <Image src='/logo_profile.png' alt='profile logo' width={25} height={25} className='lg:hidden'></Image>
              </a>
            </li>
          </ul>
        </div>
        <div className='lg:hidden content-center'>
          <a href='#'>
            <Image src='/icon_menu.png' alt='menu logo' width={50} height={50}></Image>
          </a>
        </div>
      </nav> 
      <div className='w-screen lg:flex-row lg:flex h-full lg:items-center lg:pb-48'>
        <div className='flex flex-col w-full items-center px-12 lg:basis-1/2 lg:items-start lg:px-48 '>
          <h1 className='roboto text-white text-6xl lg:text-8xl'>Welcome to</h1>
          <h1 className='righteous text-white text-6xl mt-4 lg:text-8xl lg:mt-2'>Nandur</h1>
          <p className='roboto text-white text-md text-center mt-8 lg:text-left lg:text-xl lg:tracking-wider'>At Nandur, we are passionate about bringing the joy and beauty of plants into your home. Our platform is designed to entertain and inspire plant enthusiasts of all levels, from budding gardeners to seasoned green thumbs</p>
          <button className='bg-white rounded-xl px-8 py-4 roboto text-md text-black mt-8 font-bold lg:px-12 lg:py-5 lg:text-xl'>Products</button>
        </div>
        <div className='flex flex-row place-content-center mt-16 lg:hidden'>
          <div className='flex flex-col gap-4'>
            <Image src='/1.jpg' alt='plant image' width={140} height={140} className='rounded-lg'></Image>
            <Image src='/3.jpg' alt='plant image' width={140} height={140} className='rounded-lg'></Image>
          </div>
          <div className='content-center ml-4'>
            <Image src='/2.jpg' alt='plant image' width={140} height={240} className='rounded-lg'></Image>
          </div>
        </div>
        <div className='hidden lg:flex flex-row place-content-center mt-16 lg:basis-1/2'>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <Image src='/1.jpg' alt='plant image' width={280} height={280} className='rounded-lg'></Image>
            <Image src='/3.jpg' alt='plant image' width={280} height={280} className='rounded-lg'></Image>
          </div>
          <div className='content-center ml-4 lg:ml-8'>
            <Image src='/2.jpg' alt='plant image' width={280} height={480} className='rounded-lg'></Image>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default hero
