import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  //Reserved to navigate to saber mas
  const navigate = useNavigate();

  return (
    //1st div = bg, 2nd div = flur. Make their size coincide at all sc sizes
    <div className='w-[92vw] h-[76vh] sm:h-[70vh]  lg:h-[35vw] xl:h-[32vw] mt-8 mx-auto  relative rounded-2xl bg-[url(/mainBG_lg.JPG)] bg-cover bg-no-repeat '>
    <div className='w-[92vw] h-[76vh] sm:h-[70vh] lg:h-[35vw] xl:h-[32vw] mt-8 mx-auto bg-transparent relative rounded-2xl backdrop-blur-[5px] '>
    {/* <div className='w-[92vw] h-[84vh] sm:h-[75vh] md:h-[65vh] lg:h-[38vw] xl:h-[35vw] mt-8 mx-auto py-7 md:pt-20 xl:pt-40 bg-transparent relative rounded-2xl backdrop-blur-[7px] '> */}
        <div className='absolute flex flex-col items-center gap-4 xs:gap-8 sm:gap-10 w-full pt-8 xs:pt-13 sm:pt-20 px-6 sm:px-8 lg:pt-10 xl:pt-20 lg:pl-12'>
            <h2 className='text-white text-2xl sm:text-3xl lg:text-4xl text-shadow-[1px_1px_2px_black] font-bold sm:self-start'>¿Qué es la Arteterapia?</h2>
             <p className='lg:w-[80%] lg:self-start text-sm md:text-[1rem] text-white text-shadow-[1px_1px_1px_#1a2450] font-semibold text-justify tracking-wide'>La Arteterapia es una disciplina gentil y no invasiva que se basa en nuestro proceso creativo para incrementar el bienestar emocional, el autoconocimiento y desarrollo personal. <br />No hace falta maestría en ninguna técnica artística, sino estar abiertos a escuchar lo que nuestra creatividad tiene para decirnos. En Artómica acompañamos tu proceso y el de los que más amas, para que puedas reencontrarte a la vez que disfrutas creando en un espacio seguro y contenido.
             </p>

             {/* Button Container */}
             <div className=' w-full flex items-center justify-center md:justify-start gap-4 xs:gap-8 mt-3 xs:px-4 xs:flex-row text-sm sm:text-[1rem] text-center text-whitesmoke text-shadow-[1px_1px_1px_#1a2450] font-medium tracking-widest'>
                <a href='#serviceId' className='bg-med px-4 xs:px-3 h-9 w-[min(50%,160px)] py-1 rounded-3xl shadow-buttonIn hover:scale-105 hover:shadow-light transition-all duration-300'>Reservar</a>
                <a href='#serviceId' className='bg-amber-400 px-4 xs:px-3 h-9 w-[min(50%,160px)] py-1 rounded-3xl shadow-headerButtonIn hover:scale-105 hover:shadow-extraLight transition-all duration-300'>Saber más</a>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Header
