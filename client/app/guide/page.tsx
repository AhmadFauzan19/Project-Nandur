import React from 'react'

const page = () => {
  return (
    <div className='bg-primary w-screen h-screen place-items-center flex lg:place-content-center'>
      <div className='bg-white flex flex-col w-fit h-fit mx-12 rounded-xl p-8'>
        <h1 className='roboto font-bold text-xl mb-4 text-black lg:text-4xl'>How to Connect to Device</h1>
        <p className='roboto text-black text-md lg:text-xl'>1. Turn on the Nandur Hortibox device.</p>
        <p className='roboto text-black text-md lg:text-xl'>2. Connect the Nandur Hortibox device to Wi-Fi.</p>
        <p className='roboto text-black text-md lg:text-xl'>3. Log in to your account on the Nandur website.</p>
        <p className='roboto text-black text-md lg:text-xl'>4. Ensure that both the website and the Nandur Hortibox device are connected to the same Wi-Fi network.</p>
        <p className='roboto text-black text-md lg:text-xl'>5. Insert the measurement sensor into the soil of the plant.</p>
        <p className='roboto text-black text-md lg:text-xl'>6. The Nandur Hortibox will monitor the soil moisture level in real-time.</p>
        <p className='roboto text-black text-md lg:text-xl'>7. If the soil moisture level reaches the specified minimum threshold, you will receive a notification via email to water the plant immediately.</p>
      </div>
    </div>
  )
}

export default page
