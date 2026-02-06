import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  //Reserved to navigate to saber mas
  const navigate = useNavigate();

  return (
    //1st div = bg, 2nd div = flur. Make their size coincide at all sc sizes
    <div className='w-[92vw] h-[84vh] sm:h-[75vh] md:h-[65vh] lg:h-[38vw] xl:h-[35vw] mt-8 mx-auto  relative rounded-2xl bg-[url(/blueflowerMain_bg.JPG)] bg-cover bg-no-repeat shadow-header'>
    <div className='w-[92vw] h-[84vh] sm:h-[75vh] md:h-[65vh] lg:h-[38vw] xl:h-[35vw] mt-8 mx-auto py-7 xs:pt-20 xl:pt-40 bg-transparent relative rounded-2xl backdrop-blur-[5px]'>
        <div className='absolute flex flex-col items-center gap-8 w-full px-8 xs:items-center'>
            <h2 className='text-whitesmoke text-3xl sm:text-4xl lg:text-5xl text-shadow-[0_3px_7px_#49557e] sm:self-start'>¿Qué es la Arteterapia?</h2>
             <p className='lg:w-[70%] lg:self-start text-md sm:text-lg lg:text-[1.25rem]  text-white text-shadow-[1px_1px_2px_black] text-justify'>La Arte terapia es una disciplina gentil y no invasiva que se basa en nuestro proceso creativo para incrementar el bienestar emocional, el autoconocimiento y desarrollo personal. <br />No hace falta maestría en ninguna técnica artística, sino estar abiertos a escuchar lo que nuestra creatividad tiene para decirnos. En Artómica acompañamos tu proceso y el de los que más amas, para que puedas reencontrarte a la vez que disfrutas creando en un espacio seguro y contenido.
             </p>

             {/* Button Container */}
             <div className=' w-full flex flex-col items-center justify-center sm:justify-start gap-4 lg:gap-10 px-4 xs:flex-row lg:justify-start'>
              <div className='w-32 h-10 md:w-42 md:h-11 grid items-center justify-center rounded-3xl shadow-buttonOut'>
                <a href='#serviceId' className='w-31 h-9 md:w-41 md:h-10 py-1 rounded-3xl text-whitesmoke text-shadow-[1px_1px_2px_black] text-md sm:text-lg text-center font-medium tracking-widest shadow-buttonIn hover:scale-105 hover:bg-med hover:shadow-light transition-all duration-300'>Reservar</a>
              </div>
              <div className='w-32 h-10 md:w-42 md:h-11 grid items-center justify-center rounded-3xl shadow-buttonOut'>
                <a href='#serviceId' className='w-31 h-9 md:w-41 md:h-10 py-1 rounded-3xl text-whitesmoke text-shadow-[1px_1px_2px_black] text-md sm:text-lg text-center font-medium tracking-widest shadow-buttonIn hover:scale-105 hover:bg-med hover:shadow-light transition-all duration-300'>Saber más</a>
             </div>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Header
