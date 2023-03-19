import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className="w-screen">
      {/**primer banner **/}
      <div className='w-auto h-auto bg-bgr flex justify-center'>
        <div className='relative max-w-7xl maxH w-screen flex  flex-col justify-center items-center'>
          <div className='w-11/12 h-screen'>
            <div className="bg-bgr flex  2xl:flex-row items-center  text-base w-full h-16 mt-8 justify-between">
                {/* Left */}
                <Link  href="/" passHref>
                  <div className="grid place-content-start  ml-3">
                      <svg width="113" height="45" viewBox="0 0 113 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="20" fill="#94856F"/>
                          <circle cx="68" cy="34" r="11" fill="#94856F"/>
                          <circle cx="107" cy="34" r="6" fill="#94856F"/>
                          <path d="M10 16.0005L19.732 11.1345C19.8152 11.0929 19.907 11.0713 20 11.0713C20.093 11.0713 20.1848 11.0929 20.268 11.1345L30 16.0005M28 19.0005V27.0005C28 27.5309 27.7893 28.0396 27.4142 28.4147C27.0391 28.7898 26.5304 29.0005 26 29.0005H14C13.4696 29.0005 12.9609 28.7898 12.5858 28.4147C12.2107 28.0396 12 27.5309 12 27.0005V19.0005" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                </Link>
                {/* Rigth */}
                <Link  href="/" passHref>
                  <div className="grid place-content-start  mr-3">
                    <h1 className='font-heads text-bgr2 text-2xl'>MMDC</h1>
                  </div>
                </Link>
            </div>
            <div className='absolute z-10 hover:filter-none flex flex-row items-baseline top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-20 bottom-0 w-auto h-96 filter-none'>
              <div className='w-full h-full relative hover:filter-none '>
              <p className='absolute hover:filter-none w-96 top-0 -left-48 font-body text-lg text-bgr2 font-extralight tracking-widest -rotate-90 z-10 filter-none '>María Mónica Díez Cruz</p>
              </div>
              <img className='transform -translate-y-36 scale-90 filter-none  '  src="/fotobanner1.png"/>
            </div>
            <div className='animate-slide-left top-1/3 left-0 absolute z-10 border-gold border-r-4 border-t-4'>
              <img className='h-full grayscale'  src="/izqbanner.png" />
            </div>
            <div className='animate-slide-right top-1/4 right-0 absolute z-10 border-gold border-l-4 border-t-4'>
              <img className='h-full grayscale  '  src="/derbanner.png" />
            </div>
            <div className='w-auto h-auto absolute bottom-1/4 right-1/4 transform translate-x-36 translate-y-28  z-10 '>
              <p className=' hover:filter-none w-28 top-0 -left-48 font-body text-lg text-bgr2 font-extralight tracking-widest  z-10 filter-none '>Participación</p>
              <p className=' hover:filter-none w-96 top-0 -left-48 font-heads text-6xl text-gold font-extralight tracking-widest  z-10 filter-none '>Graduación</p>
              <p className=' hover:filter-none w-96 top-0 -left-48 font-heads ml-1 text-lg text-bgr2 font-extralight tracking-widest  z-10 filter-none '>Msc moda, diseño y gestión de lujo</p>
            </div>
            <div className='linea z-0  top-1/3 left-1/2 w-1/2'></div>
            <div className='lineaD z-0  top-1/3 left-0 mt-10 w-1/3  '></div>
          </div>
        </div>
      </div>
      <div className='linea z-0  bottom-0 -left-72 mt-10 w-2/3 rotate-90 '></div>
      {/**segundo banner **/}
      <div className='w-auto h-auto bg-bgr2 flex justify-center'>
        <div className='relative max-w-7xl maxH w-screen flex  flex-col justify-center items-center'>
          <div className='w-11/12 h-screen'>
            <div className=" flex  2xl:flex-row items-center  text-base w-full h-16 mt-8 justify-center">
                {/* Left */}
                <Link  href="/" passHref>
                  <div className="grid place-content-start  ml-3">
                      <svg width="113" height="45" viewBox="0 0 113 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="20" fill="#94856F"/>
                          <circle cx="68" cy="34" r="11" fill="#94856F"/>
                          <circle cx="107" cy="34" r="6" fill="#94856F"/>
                          <path d="M10 16.0005L19.732 11.1345C19.8152 11.0929 19.907 11.0713 20 11.0713C20.093 11.0713 20.1848 11.0929 20.268 11.1345L30 16.0005M28 19.0005V27.0005C28 27.5309 27.7893 28.0396 27.4142 28.4147C27.0391 28.7898 26.5304 29.0005 26 29.0005H14C13.4696 29.0005 12.9609 28.7898 12.5858 28.4147C12.2107 28.0396 12 27.5309 12 27.0005V19.0005" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                </Link>
               
            </div>
            <div className='absolute z-10 hover:filter-none flex flex-row items-baseline top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-20 bottom-0 w-auto h-96 filter-none'>
              <div className='w-full h-full relative hover:filter-none '>
              <p className='absolute hover:filter-none w-96 top-0 -left-48 font-body text-lg text-bgr2 font-extralight tracking-widest -rotate-90 z-10 filter-none '>María Mónica Díez Cruz</p>
              </div>
            </div>
            <div className='animate-slide-left bottom-20 left-0 absolute z-10 border-gold border-r-4 border-t-4'>
              <img className='h-full grayscale'  src="/banner2izq.png" />
            </div>
            <div className='animate-slide-right top-16 right-0 absolute z-10 border-gold border-l-4 border-t-4 banner2derH'>
              <img className='h-full grayscale  '  src="/banner2der.png" />
            </div>
            <div className='w-auto h-auto absolute bottom-1/4 right-1/4 transform translate-x-36 translate-y-28  z-10 '>
              <p className=' hover:filter-none w-28 top-0 -left-48 font-body text-lg text-bgr2 font-extralight tracking-widest  z-10 filter-none '>Participación</p>
              <p className=' hover:filter-none w-96 top-0 -left-48 font-heads text-6xl text-gold font-extralight tracking-widest  z-10 filter-none '>Graduación</p>
              <p className=' hover:filter-none w-96 top-0 -left-48 font-heads ml-1 text-lg text-bgr2 font-extralight tracking-widest  z-10 filter-none '>Msc moda, diseño y gestión de lujo</p>
            </div>
            <div className='lineaD z-0  top-1/3 left-0 mt-32 w-full  '></div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
