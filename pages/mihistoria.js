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
            <div className=' max-w-7xl min-w-fit py-4  md:py-0 minH2 w-screen flex flex-col justify-center items-center'>
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
          {/**tercer banner **/}
          <div className='w-auto h-auto  bg-bgr2 flex justify-center'>
            <div className=' max-w-7xl minH minH w-screen flex  flex-col '>
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
          {/**cuarto banner **/}
          <div className='w-auto h-auto py-6 bg-bgr flex justify-center'>
            <div className=' max-w-7xl py-10 md:py-0 maxH w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12  h-auto md:h-screen flex flex-col md:flex-col justify-center items-center align-middle md:relative '>
                
              
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none '>
                  <div className='w-full h-full flex flex-col xl:flex-row  justify-center align-middle items-center hover:filter-none '>
                    <p className='ml-2 sm:ml-0  hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                    <img className=' grayscale maxH  scale-75'  src="/fam1.png" />
                  </div>
                </div>
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none'>
                  <div className='w-full h-full flex flex-col-reverse xl:flex-row justify-center align-middle items-center hover:filter-none '>
                    <img className=' grayscale maxH  scale-75'  src="/fam2.png" />
                    <p className='ml-2 sm:ml-0 hover:filter-none max-w-lg top-0  font-body md:text-lg text-bgr2 font-extralight  z-10 filter-none '>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. Cada esfuerzo, cada sacrificio, cada trasnochada, conllevó a lograr mi sueño.</p>
                  </div>
                </div>
                  
              </div>
            </div>
          </div>
      </div>
      <div className='w-screen bg-bgr2 flex flex-col justify-center items-center align-middle'>
          {/**quinto banner **/}
          <div className='w-auto h-auto  bg-bgr2 flex justify-center items-center'>
            <div className=' max-w-7xl minH2 min-w-fit maxH w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12 h-full flex flex-col md:flex-row justify-center items-center gap-6'>   
                <div className='w-auto h-auto max-w-xl'>
                  <p className='font-heads text-5xl md:text-6xl text-gold max-w-lg'>Gracias por acompañarme en una aventura mas</p>
                  <p className=' max-w-lg  font-body md:text-lg text-bgr3 font-extralight t z-10 filter-none mt-4'>Tomé la decisión de continuar mis estudios y preparación a través de un Master con el sentimiento de dejar a mi familia pero al mismo tiempo con la intención de forjar un futuro promisorio que al día de hoy pienso con el corazón que valió la pena. </p>
                </div>
                <div className='w-40 md:w-auto h-auto relative '>
                  <h1 className='font-heads text-bgr2 text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>MMDC</h1>
                  <img className='mr-2 grayscale md:scale-90'  src="/lastm.png" />
                </div>
              </div>
              <div className=" flex relative z-20 2xl:flex-row items-center  text-base w-full h-16 mt-8 justify-center">
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
                        <svg width="113" height="45" viewBox="0 0 113 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 56 23)" fill="#94856F"/>
                          <circle cx="6" cy="6" r="6" transform="matrix(-1 0 0 1 12 28)" fill="#94856F"/>
                          <circle cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 113 0)" fill="#94856F"/>
                          <path d="M93.768 31.128C89.7787 31.128 86.824 29.9973 84.904 27.736C84.2213 26.9253 83.6667 25.848 83.24 24.504C82.8133 23.16 82.6 21.528 82.6 19.608C82.6 17.688 82.9093 15.9707 83.528 14.456C84.168 12.92 85.032 11.736 86.12 10.904C88.232 9.34667 90.7813 8.568 93.768 8.568C94.728 8.568 95.6667 8.64267 96.584 8.792C97.5013 8.92 98.184 9.05867 98.632 9.208L99.304 9.432L99.208 9.752C97.544 9.176 95.7307 8.888 93.768 8.888C91.5067 8.888 89.6187 9.624 88.104 11.096C86.952 12.184 86.1413 13.784 85.672 15.896C85.3947 17.0907 85.256 18.552 85.256 20.28C85.256 22.008 85.5013 23.608 85.992 25.08C86.4827 26.5307 87.0373 27.608 87.656 28.312C88.296 29.016 89.064 29.5813 89.96 30.008C90.856 30.4133 91.5707 30.648 92.104 30.712C92.6373 30.776 93.2667 30.808 93.992 30.808C94.7387 30.808 95.7307 30.7227 96.968 30.552V23.96H93.096V23.64H101V23.96H99.624V30.264C98.0027 30.84 96.0507 31.128 93.768 31.128Z" fill="#D9D9D9"/>
                        </svg>
                      </div>
                    </Link>
                </div>
            </div>
          </div>
      </div>
      </main>
    </>
  )
}
