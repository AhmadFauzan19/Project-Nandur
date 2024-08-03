import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div>
      <div className='bg-primary'>
        <div className='w-full pt-12 lg:hidden'>
            <div className='w-full justify-center flex'>
               <h1 className='righteous text-white text-5xl'>Nandur</h1>
            </div>
            <div className='flex flex-col gap-y-4 mt-12 ml-12'>
                <h1 className='roboto text-white text-3xl font-bold'>Contact Us</h1>
                <div className='flex flex-row'>
                  <Image src='/email.png' alt='email' width={25} height={25}></Image>
                  <p className='roboto text-white ml-4 text-xl'>Nandur.hortibox@gmail.com</p>
                </div>
                <div className='flex flex-row'>
                  <Image src='/ig.png' alt='email' width={25} height={25}></Image>
                  <p className='roboto text-white ml-4 text-xl'>@nandur_</p>
                </div>
                <div className='flex flex-row'>
                  <Image src='/twitter.png' alt='email' width={25} height={25}></Image>
                  <p className='roboto text-white ml-4 text-xl'>@Nandur_</p>
                </div>
                <div className='flex flex-row'>
                  <Image src='/call.png' alt='email' width={25} height={25}></Image>
                  <p className='roboto text-white ml-4 text-xl'>+62-875-8975-7458</p>
                </div>
                <div className='flex flex-row gap-x-4 pb-12 mt-4'>
                  <Image src='/ig_big.png' alt='email' width={50} height={50}></Image>
                  <Image src='/twitter_big.png' alt='email' width={50} height={50}></Image>
                </div>
            </div>  
        </div>
        <div className='w-full lg:flex flex-row hidden pt-12 pb-12'>
          <div className='basis-1/4 px-24'>
            <h1 className='righteous text-6xl text-white'>Nandur</h1>
          </div>
          <div className='basis-1/4 px-24 flex flex-col gap-y-4'>
            <h1 className='roboto text-white text-3xl font-bold'>Quick Links</h1>
            <p className='roboto text-white text-xl'>About Us</p>
            <p className='roboto text-white text-xl'>Products</p>
            <p className='roboto text-white text-xl'>Guide</p>
          </div>
          <div className='basis-1/4 px-24 flex flex-col gap-y-4'>
            <h1 className='roboto text-white text-3xl font-bold'>Contact Us</h1>
            <div className='flex flex-row'>
              <Image src='/email.png' alt='email' width={25} height={25}></Image>
              <p className='roboto text-white ml-4 text-xl'>Nandur.hortibox@gmail.com</p>
            </div>
            <div className='flex flex-row'>
              <Image src='/ig.png' alt='email' width={25} height={25}></Image>
              <p className='roboto text-white ml-4 text-xl'>@nandur_</p>
            </div>
            <div className='flex flex-row'>
              <Image src='/twitter.png' alt='email' width={25} height={25}></Image>
              <p className='roboto text-white ml-4 text-xl'>@Nandur_</p>
            </div>
            <div className='flex flex-row'>
              <Image src='/call.png' alt='email' width={25} height={25}></Image>
              <p className='roboto text-white ml-4 text-xl'>+62-875-8975-7458</p>
            </div>        
          </div>
          <div className='basis-1/4 px-24'>
            <h1 className='roboto text-white text-3xl font-bold'>Follow Us</h1>
            <div className='flex flex-row gap-x-8 pb-12 mt-4'>
                <Image src='/ig_big.png' alt='email' width={50} height={50}></Image>
                <Image src='/twitter_big.png' alt='email' width={50} height={50}></Image>
              </div>
          </div>
        </div>
      </div>
    </div>
      
    
  )
}

export default footer
