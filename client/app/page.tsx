import Image from 'next/image';

export default function Home() {
  return(
    
    <div className="w-screen flex flex-col h-screen bg-primary">
      <nav className='flex justify-between items-center pt-8'>
        <div className='flex justify-between pl-48 items-center'>
          <div>
            <Image src="/logo_nandur.png" alt='logo nandur' width={100} height={100}></Image>
          </div>
            <a className='text-white pl-8 text-5xl righteous'>Nandur</a>
        </div>
        <div className='flex justify-between pr-48'>
          <ul>
            <li className='list-none inline-block px-12'><a href='#' className='text-white roboto text-lg'>Home</a></li>
            <li className='list-none inline-block px-12'><a href='#' className='text-white roboto text-lg'>Profile</a></li>
            <li className='list-none inline-block px-12'><a href='#' className='text-white roboto text-lg'>Product</a></li>
            <li className='list-none inline-block px-12'><a href='#' className='text-white roboto text-lg'>Guide</a></li>
          </ul>
          <div className='pl-10'>
            <a href='#'>
              <Image src="/logo_profile.png" alt='profile' width={24} height={12}></Image>
            </a>
          </div>
        </div>
      </nav>
      <div className='flex flex-row h-full'>
        <div className="basis-1/2 flex w-1/2 place-content-center px-48">
          <div className='flex flex-col place-content-center'>
            <h1 className="text-white roboto text-8xl">Welcome to</h1>
            <h1 className="text-white righteous text-8xl mt-3">Nandur</h1>
            <p className='text-white roboto text-xl mt-6 font-thin'>At Nandur, we are passionate about bringing the joy and beauty of plants into your home. Our platform is designed to entertain and inspire plant enthusiasts of all levels, from budding gardeners to seasoned green thumbs</p>
            <button className='self-start bg-white px-8 py-4 roboto text-xl font-bold mt-6 rounded-full'>Products</button>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center">
          <div className="flex flex-row">
            <div className='flex flex-col self-center'>
              <div className=''>
                <Image src="/1.jpg" alt='1' width={300} height={300} className='rounded-3xl'></Image>
              </div>
              <div className='mt-10'>
                <Image src="/3.jpg" alt='3' width={300} height={300} className='rounded-3xl'></Image>
              </div>
            </div>
            <div className='self-center ml-10'>
              <Image src="/2.jpg" alt='2' width={300} height={550} className='rounded-3xl'></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}