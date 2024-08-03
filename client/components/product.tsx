import React from 'react'
import Card from '@/components/products_card';

const product = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col w-full items-center pt-12'>
        <h1 className='roboto text-black text-4xl font-bold opacity-80 lg:text-6xl'>Nandur Horti Box</h1>
        <div className='flex flex-row justify-center w-full mt-6 lg:justify-evenly'>
          <Card title='Economic Package' description='Rp45.000' imageUrl='/logo_nandur.png'/>
          <Card title='Premium Package' description='Rp145.000' imageUrl='/logo_nandur.png'/>
        </div>
      </div>
      <div className='flex flex-col w-full items-center pt-20 pb-20'>
        <h1 className='roboto text-black text-4xl font-bold opacity-80 lg:text-6xl'>Plant Package</h1>
        <div className='flex flex-wrap justify-center mt-6 w-full px-12'>
          <Card title='Karavela Package' description='Vegetables' imageUrl='/vegetables.jpg'/>
          <Card title='Karavela Package' description='Vegetables' imageUrl='/vegetables.jpg'/>
          <Card title='Karavela Package' description='Vegetables' imageUrl='/vegetables.jpg'/>
          <Card title='Karavela Package' description='Vegetables' imageUrl='/vegetables.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default product
