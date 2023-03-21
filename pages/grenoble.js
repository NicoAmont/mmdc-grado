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
      <div className='w-screen bg-bgr flex flex-col justify-center items-center align-middle'>
          {/**primer banner **/}
          <div className='w-auto h-auto  bg-bgr flex justify-center'>
            <div className=' max-w-7xl  w-screen flex  flex-col justify-center items-center'>
              <div className='w-11/12 h-auto  flex flex-col align-middle items-center ml-2 relative'>
                <div className=" flex relative z-20 2xl:flex-row items-center  text-base w-full h-16 mt-8 justify-between">
                    {/* Left */}
                    <Link  href="/" passHref>
                      <div className="grid place-content-start  ml-3">
                          <svg width="113" height="45" viewBox="0 0 113 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="20" cy="20" r="20" fill="#94856F"/>
                              <circle cx="68" cy="34" r="11" fill="#94856F"/>
                              <circle cx="107" cy="34" r="6" fill="#94856F"/>
                              <path d="M10 16.0005L19.732 11.1345C19.8152 11.0929 19.907 11.0713 20 11.0713C20.093 11.0713 20.1848 11.0929 20.268 11.1345L30 16.0005M28 19.0005V27.0005C28 27.5309 27.7893 28.0396 27.4142 28.4147C27.0391 28.7898 26.5304 29.0005 26 29.0005H14C13.4696 29.0005 12.9609 28.7898 12.5858 28.4147C12.2107 28.0396 12 27.5309 12 27.0005V19.0005" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </div>
                    </Link>
                    {/* Rigth */}
                    <Link  href="/mihistoria" passHref>
                      <div className="grid place-content-start z-20  mr-3">
                        <h1 className='font-heads text-bgr2 md:text-bgr2 text-2xl'>MMDC</h1>
                      </div>
                    </Link>
                </div>
                <p className='font-heads text-5xl md:text-6xl text-gold my-10 '>Grenoble École de Management</p>
                <img className='mr-2 grayscale md:scale-90 mb-10'  src="/gbanner.png" />
                <div className='w-11/12 max-w-3xl h-auto gap-6  flex flex-col md:flex-col justify-center items-center align-middle md:relative '>
                
              
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none '>
                  <div className='w-full h-full flex flex-col xl:flex-row  justify-center align-middle items-center hover:filter-none '>
                    <p className='ml-2 sm:ml-0 border-gold border-l-2 pl-2 hover:filter-none max-w-md top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>La Grenoble École de Management, fundada en 1984, es una escuela de negocios líder a nivel internacional. El objetivo principal de esta institución es promover el desempeño corporativo, proporcionando habilidades y conocimientos a través de la excelencia en la innovación pedagógica y la investigación aplicada.</p>
                    <img className=' grayscale maxH  scale-75'  src="/1b.png" />
                  </div>
                </div>
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none'>
                  <div className='w-full h-full flex flex-col-reverse xl:flex-row justify-center align-middle items-center hover:filter-none '>
                    <img className=' grayscale maxH  scale-75'  src="/2b.png" />
                    <div className='flex flex-col'>
                        <p className='ml-2 sm:ml-0 hover:filter-none border-gold border-l-2 pl-2 max-w-md top-0  font-body md:text-lg text-bgr2 font-extralight  z-10 filter-none '>Esta escuela es reconocida, principalmente por su enseñanza en innovación y gestión. Su oferta educativa incluye programas de alto nivel y reconocidos internacionalmente.</p>
                        <p className='ml-2 sm:ml-0 hover:filter-none border-gold border-l-2 pl-2 max-w-md top-0  font-body md:text-lg text-bgr2 font-extralight  z-10 filter-none '>De acuerdo a EduRank, esta escuela ocupa el lugar número 94 de las universidades francesas.
    Actualmente está clasificada entre las 40 mejores escuelas de negocios europeas por el Financial Times.</p>
                    </div>
                  </div>
                </div>
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none '>
                  <div className='w-full h-full flex flex-col xl:flex-row  justify-center align-middle items-center hover:filter-none '>
                    <div className='flex flex-col'>
                        
                        <p className='ml-2 sm:ml-0 border-gold border-l-2 pl-2 hover:filter-none max-w-md top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Además, se encuentra en el 1% de las Escuelas de Negocios a nivel mundial por haber obtenido la Triple Crown de acreditaciones. El cual es un reconocimiento internacional a la calidad de la organización, sus programas y las titulaciones que imparte.</p>
                        <p className='ml-2 sm:ml-0 border-gold border-l-2 pl-2 hover:filter-none max-w-md top-0  font-body md:text-lg text-bgr2 font-extralight t z-10 filter-none '>Entre sus egresados notables, podemos nombrar a Stéphanie Hospital, Fundadora y CEO de OneRagTime; Sylvain Maillard, político y miembro del Consejo de Estado de Francia desde el 2017 y; Alexandre Camarasa, jugador de waterpolo.</p>
                    </div>
                    <img className=' grayscale maxH  scale-75'  src="/4b.png" />
                  </div>
                </div>
                <div className='h-auto z-10 hover:filter-none flex flex-col w-auto filter-none'>
                  <div className='w-full h-full flex flex-col-reverse xl:flex-row justify-center align-middle items-center hover:filter-none '>
                    <img className=' grayscale maxH  scale-75'  src="/4b.png" />
                    <div className='flex flex-col'>
                        <p className='ml-2 sm:ml-0 hover:filter-none border-gold border-l-2 pl-2 max-w-md top-0  font-body md:text-lg text-bgr2 font-extralight  z-10 filter-none '>GEM es muy famosa para su enseñanza en: "Negocios, Finanzas, Marketing y Management de Tecnologias".
    Esta escuela tiene las 3 acreditaciones más importantes de valorización académica: EQUIS,1​ AACSB2​ y AMBA.</p>
                        <p className='ml-2 sm:ml-0 hover:filter-none border-gold border-l-2 pl-2 max-w-md top-0  font-body md:text-lg text-bgr2 font-extralight  z-10 filter-none '>Creada en 1984 por la Cámara de Comercio e Industria de Grenoble CCI, su primer nombre fue la escuela superior de negocios de Grenoble.</p>
                    </div>
                  </div>
                </div>
                  
                </div>
                <div className=" flex relative z-20 2xl:flex-row items-center mb-10 text-base w-full h-16 mt-8 justify-center">
                    {/* Left */}
                    <Link  href="/" passHref>
                      <div className="grid place-content-start  ml-3">
                          <svg width="113" height="45" viewBox="0 0 113 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="20" cy="20" r="20" fill="#94856F"/>
                              <circle cx="68" cy="34" r="11" fill="#94856F"/>
                              <circle cx="107" cy="34" r="6" fill="#94856F"/>
                              <path d="M10 16.0005L19.732 11.1345C19.8152 11.0929 19.907 11.0713 20 11.0713C20.093 11.0713 20.1848 11.0929 20.268 11.1345L30 16.0005M28 19.0005V27.0005C28 27.5309 27.7893 28.0396 27.4142 28.4147C27.0391 28.7898 26.5304 29.0005 26 29.0005H14C13.4696 29.0005 12.9609 28.7898 12.5858 28.4147C12.2107 28.0396 12 27.5309 12 27.0005V19.0005" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </div>
                    </Link>
                    {/* Rigth */}
                    <Link  href="/mihistoria" passHref>
                      <div className="grid place-content-start z-20  mr-3">
                        <svg width="113" height="45" viewBox="0 0 113 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 113 0)" fill="#94856F"/>
                            <circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 56 23)" fill="#94856F"/>
                            <circle cx="6" cy="6" r="6" transform="matrix(-1 0 0 1 12 28)" fill="#94856F"/>
                            <path d="M82.496 31H82.08L84.864 8.6H85.92L92.64 29.304L99.328 8.6H100.384L103.168 31H100.512L98.304 13.08L92.512 31H90.496L84.64 13.304L82.496 31Z" fill="#D9D9D9"/>
                        </svg>
                      </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      </main>
    </>
  )
}
