import React from 'react'
import Image from 'next/image';

const mission = () => {
  return (
    <div className='w-screen bg-white'>
      <div className='flex flex-col items-center px-12 pt-12 lg:px-96 lg:pt-20'>
        <h1 className='roboto text-black font-bold text-4xl opacity-75 text-center lg:text-6xl'>Our Mission</h1>
        <p className='roboto text-black text-sm opacity-75 text-center mt-4 lg:text-xl lg:px-48 lg:mt-8'>Our mission is to create a vibrant community where people can share their love for plants,  discover new gardening tips and tricks, and find innovative solutions to enhance their indoor  gardening experience. We aim to make plant care accessible, fun, and rewarding for everyone</p>
      </div>
      <div className='lg:flex-row flex flex-col lg:mt-8'>
        <div className='flex flex-col items-center px-12 mt-12 lg:basis-1/3 lg:px-36'>
            <Image src='/mission_1.png' alt='mission 1' width={100} height={100}></Image>
            <h1 className='roboto text-black font-bold text-2xl opacity-75 mt-2 text-wrap text-center lg:text-3xl'>Entertainment and Inspirations</h1>
            <p className='roboto text-black text-sm opacity-75 text-center mt-2 lg:text-base'>Dive into a world of plant-related content, from  engaging articles and videos to interactive forums where you can connect with fellow  plant lovers</p>
        </div>
        <div className='flex flex-col items-center px-12 mt-12 lg:basis-1/3 lg:px-36'>
            <Image src='/mission_2.png' alt='mission 1' width={100} height={100}></Image>
            <h1 className='roboto text-black font-bold text-2xl opacity-75 mt-2 text-wrap text-center lg:text-3xl'>Gardening Innovation</h1>
            <p className='roboto text-black text-sm opacity-75 text-center mt-2 lg:text-base'>Stay ahead of the curve with our state-of-the-art plant gardening  warning system, designed to alert you to potential issues and provide solutions to keep  your plants thriving</p>
        </div>
        <div className='flex flex-col items-center px-12 mt-12 lg:basis-1/3 lg:px-36 pb-8 lg:pb-16'>
            <Image src='/mission_3.png' alt='mission 1' width={100} height={100}></Image>
            <h1 className='roboto text-black font-bold text-2xl opacity-75 mt-2 text-wrap text-center lg:text-3xl'>Decorative Plant Features</h1>
            <p className='roboto text-black text-sm opacity-75 text-center mt-2 lg:text-base'>Explore our wide range of decorative plants and unique  features that can transform any space into a green oasis</p>
        </div>
      </div>
    </div>
  )
}

export default mission
