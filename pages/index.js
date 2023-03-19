import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className="w-screen h-auto bg-bgr flex justify-center">
        <div className='max-w-7xl w-screen flex  flex-col justify-center'>
          <div className='w-11/12 h-screen'>
            <div className="bg-bgr flex  2xl:flex-row items-center  text-base w-full h-16 2xl:h-28  2xl:px-5  justify-between max-w-7xl">
                {/* Left */}
                <Link  href="/" passHref>
                  <div className="grid place-content-start relative ml-3">
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
                  <div className="grid place-content-start relative ml-96">
                    <h1 className='font-heads text-bgr2 text-2xl'>MMDC</h1>
                  </div>
                </Link>
            </div>
            
            <div>
              <p className='absolute w-80 top-1/2 left-1/3 transform -translate-y-1/4 bottom-0 font-body text-xl text-bgr2 font-extralight tracking-widest -rotate-90'>María Mónica Díez Cruz</p>
              <img className='absolute w-80 top-1/2 left-1/3 transform -translate-y-1/2 bottom-0 filter-none'  src="/fotobanner1.png"/>
            </div>
            <div className='animate-slide-left bottom-28 left-16 absolute border-gold border-r-4 border-t-4'>
              <img className='h-full'  src="/izqbanner.png" />
            </div>
            <div className='animate-slide-right top-32 right-16 absolute border-gold border-l-4 border-t-4'>
              <img className='h-full'  src="/derbanner.png" />
            </div>
              
            
          </div>
        </div>
        
      </main>
    </>
  )
}
