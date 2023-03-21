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
          {/**primer banner **/}
          <div className='w-auto h-auto  bg-bgr2 flex justify-center'>
            <div className=' max-w-7xl minH maxH w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12 h-auto md:h-screen flex  flex-col justify-center items-center relative'>
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
                        <h1 className='font-heads text-gold md:text-bgr2 text-2xl'>MMDC</h1>
                      </div>
                    </Link>
                </div>

                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none md:mr-40 ml-2'>
                  <div className='w-full h-full  hover:filter-none mt-10'>
                    <p className=' hover:filter-none top-0  font-heads text-5xl md:text-6xl text-gold font-extralight z-10 filter-none mb-3'>Mi historia</p>
                    <p className=' hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                    <div className='mt-10 gap-2 flex flex-row  h-full overflow-x-scroll overflow-y-hidden '>
                      <img className=' grayscale'  src="/collage1_1.png" />
                      <img className=' grayscale'  src="/collage1_2.png" />
                      <img className=' grayscale'  src="/collage1_3.png" />
                    </div>
                  
                </div>
                <div className='overflow-hidden w-full h-full top-0 left-0'>

                <div className='overflow-hidden w-full h-full top-0 left-1/3 transform translate-x-1/2 hidden md:flex absolute'>
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
            <div className=' max-w-7xl py-10 md:py-0 md:maxH w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12 h-auto md:h-screen flex flex-col md:flex-row justify-center items-center align-middle md:relative '>
                
              <div className='overflow-hidden w-full h-auto top-0 left-1/3 transform -translate-x-1/2 hidden md:flex absolute'>
                    <img className='h-screen grayscale maxH mr-10'  src="/mih_banner2izq.png" />
                </div>
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none md:mr-40 md:ml-40'>
                  <div className='w-full h-full  hover:filter-none '>
                    <p className=' hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                    <p className=' hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                    <p className=' hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                      <p className=' hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                </div>
                  <div className='mt-10 gap-10 flex flex-row  h-full overflow-x-scroll overflow-y-hidden md:flex-col w-auto md:justify-center md:items-center md:align-middle '>
                    <img className='mr-2 grayscale'  src="/gal2_1.png" />
                    <img className='ml-2 grayscale'  src="/gal2_2.png" />
                    <img className='mr-2 grayscale'  src="/gal2_3.png" />
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div className='w-screen bg-bgr2 flex flex-col justify-center items-center align-middle'>
          {/**primer banner **/}
          <div className='w-auto h-auto  bg-bgr2 flex justify-center'>
            <div className=' max-w-7xl minH maxH w-screen flex  flex-col '>
              <div className=' h-auto md:h-screen flex  flex-row justify-between relative '>
                
                <div className='h-auto z-10 hover:filter-none mb-10 flex flex-col align-middle justify-center w-auto filter-none md:mr-40 ml-4'>
                  <div className='w-full h-auto  hover:filter-none mt-10'>
                    <p className=' hover:filter-none max-w-4xl top-0 font-body md:text-lg text-bgr font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                    <div className='gap-2 flex flex-row mt-10 max-w-4xl h-auto overflow-x-scroll overflow-y-hidden '>
                      <img className=' grayscale'  src="/banner3_!.png" />
                      <img className=' grayscale'  src="/banner3_2.png" />
                      <img className=' grayscale'  src="/banner3_3.png" />
                    </div>
                    <div className='w-full h-auto  hover:filter-none mt-10 '>
                    <p className='hover:filter-none max-w-4xl top-0  font-body md:text-lg text-bgr font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                </div>
                <div className='overflow-hidden w-full h-auto top-0 left-1/3 transform translate-x-1/2 hidden md:flex absolute'>
                    <img className='h-screen grayscale maxH mr-10'  src="/mih_banner3der.png" />
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='w-screen bg-bgr flex flex-col justify-center items-center align-middle'>
          {/**segundo banner **/}
          <div className='w-auto h-auto py-6 bg-bgr flex justify-center'>
            <div className=' max-w-7xl py-10 md:py-0 xl:maxH h-auto w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12 gap-10 h-auto md:h-auto flex flex-col md:flex-col justify-center items-center align-middle md:relative '>
                
              
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none md:mr-40 md:ml-40'>
                  <div className='w-full h-full flex flex-col xl:flex-row  justify-center align-middle items-center hover:filter-none '>
                    <p className=' hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                    <img className=' grayscale maxH mr-10 scale-75'  src="/fam1.png" />
                  </div>
                </div>
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none md:mr-40 md:ml-40'>
                  <div className='w-full h-full flex flex-col-reverse xl:flex-row justify-center align-middle items-center hover:filter-none '>
                    <img className=' grayscale maxH mr-10 scale-75'  src="/fam2.png" />
                    <p className=' hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight  z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                </div>
                  
              </div>
            </div>
          </div>
      </div>
      </main>
    </>
  )
}
