import React from 'react'
import Image from 'next/image'

const confirm = () => {
  return (
      <div className='bg-white w-fit h-fit rounded-xl p-8 m-12 flex flex-col gap-4'>
        <div className='flex justify-center w-full'>
          <Image src='/logo_nandur.png' alt='logo nandur' width={300} height={300}></Image>
        </div>
        <h1 className='roboto text-black font-bold text-2xl'>Paket Ekonomis</h1>
        <p className='roboto text-black text-md'>Menggunakan wadah sederhana dengan bahan kardus tanpa adanya alat pengukur kelembaban tanah</p>
        <p className='roboto text-black text-2xl'>Rp45.000</p>
        <div className='flex gap-8 justify-between'>
          <button className='bg-white border-gray-300 border-2 rounded-xl px-16 py-4 roboto text-md text-black font-bold'>Cancel</button>
          <button className='bg-primary rounded-xl px-16 py-4 roboto text-md text-white font-bold'>Confirm</button>
        </div>
      </div>
  )
}

export default confirm
