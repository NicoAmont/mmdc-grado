import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className="w-screen h-auto bg-bgr flex justify-center">
        <div className='relative max-w-7xl w-screen flex  flex-col justify-center items-center'>
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
            
            <div className='absolute flex flex-row items-baseline top-1/2 left-1/3 transform -translate-y-1/2 bottom-0 w-auto h-96 filter-none'>
              <div className='w-full h-full relative filter-none'>
              <p className='absolute w-96 top-0 -left-48 font-body text-xl text-bgr2 font-extralight tracking-widest -rotate-90 z-10 filter-none '>María Mónica Díez Cruz</p>
              </div>
              <img className='transform -translate-y-36 scale-90 filter-none'  src="/fotobanner1.png"/>
            </div>
            <div className='animate-slide-left top-1/4 left-0 absolute border-gold border-r-4 border-t-4'>
              <img className='h-full'  src="/izqbanner.png" />
            </div>
            <div className='animate-slide-right top-1/4 right-0 absolute border-gold border-l-4 border-t-4'>
              <img className='h-full'  src="/derbanner.png" />
            </div>
              
            
          </div>
        </div>
        
      </main>
    </>
  )
}
