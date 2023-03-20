import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showDiv1, setShowDiv1] = useState(true);

  return (
    <>
      
      <main className="w-screen flex flex-col justify-center items-center align-middle">
      <div className='w-screen bg-bgr2 flex flex-col justify-center items-center align-middle'>
          {/**segundo banner **/}
          <div className='w-auto h-auto  bg-bgr2 flex justify-center'>
            <div className=' max-w-7xl minH maxH w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12 h-auto sm:h-screen flex  flex-col justify-center items-center '>
                <div className=" flex relative z-20 2xl:flex-row items-center  text-base w-full h-16 mt-8 justify-between">
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
                    {/* Rigth */}
                    <Link  href="/mihistoria" passHref>
                      <div className="grid place-content-start z-20  mr-3">
                        <h1 className='font-heads text-gold sm:text-bgr2 text-2xl'>MMDC</h1>
                      </div>
                    </Link>
                </div>

                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none sm:mr-40 ml-2'>
                  <div className='w-full h-full  hover:filter-none mt-10'>
                    <p className=' hover:filter-none top-0  font-heads text-5xl sm:text-6xl text-gold font-extralight z-10 filter-none mb-3'>Mi historia</p>
                    <p className=' hover:filter-none max-w-lg top-0  font-body sm:text-lg text-bgr font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                    <div className='mt-10 gap-2 flex flex-row  h-full overflow-x-scroll overflow-y-hidden '>
                      <img className=' grayscale'  src="/collage1_1.png" />
                      <img className=' grayscale'  src="/collage1_2.png" />
                      <img className=' grayscale'  src="/collage1_3.png" />
                    </div>
                  
                </div>
                <div className='overflow-hidden w-full h-full top-0 left-0'>

                  <div className='hidden sm:flex animate-slide-right top-0 right-0 absolute '>
                    <img className='h-screen grayscale maxH mr-10'  src="/mih_banner1der.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='w-screen bg-bgr flex flex-col justify-center items-center align-middle'>
          {/**segundo banner **/}
          <div className='w-auto h-auto  bg-bgr flex justify-center'>
            <div className=' max-w-7xl minH maxH w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12 h-auto sm:h-screen flex  flex-col justify-center items-center '>
                <div className='hidden sm:flex animate-slide-right top-0 right-0 absolute '>
                  <img className='h-screen grayscale maxH mr-10'  src="/mih_banner1der.png" />
                </div>
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none sm:mr-40 ml-2'>
                  <div className='w-full h-full  hover:filter-none mt-10'>
                    <p className=' hover:filter-none top-0  font-heads text-5xl sm:text-6xl text-gold font-extralight z-10 filter-none mb-3'>Mi historia</p>
                    <p className=' hover:filter-none max-w-lg top-0  font-body sm:text-lg text-bgr font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                  <div className='mt-10 gap-2 flex flex-row  h-full overflow-x-scroll overflow-y-hidden '>
                    <img className=' grayscale'  src="/collage1_1.png" />
                    <img className=' grayscale'  src="/collage1_2.png" />
                    <img className=' grayscale'  src="/collage1_3.png" />
                  </div>
                </div>
                <div className='overflow-hidden w-full h-full top-0 left-0'>
                  
                </div>
              </div>
            </div>
          </div>
      </div>
      </main>
    </>
  )
}
