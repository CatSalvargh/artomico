import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    //1st div = bg, 2nd div = flur. Make their size coincide at all sc sizes
    <div className='w-[92vw] h-[84vh] sm:h-[75vh] md:h-[65vh] lg:h-[38vw] xl:h-[35vw] mt-8 mx-auto  relative rounded-2xl bg-[url(/blueflowerMain_bg.JPG)] bg-cover bg-no-repeat shadow-header'>
    <div className='w-[92vw] h-[84vh] sm:h-[75vh] md:h-[65vh] lg:h-[38vw] xl:h-[35vw] mt-8 mx-auto py-7 xs:pt-30 xl:pt-40 bg-transparent relative rounded-2xl backdrop-blur-[5px]'>
        <div className='absolute flex flex-col items-center gap-8 w-full px-8 xs:items-center'>
            <h2 className='text-whitesmoke text-3xl sm:text-4xl lg:text-5xl text-shadow-[0_3px_7px_#49557e] sm:self-start'>¿Qué es la Arteterapia?</h2>
             <p className='font-medium text-md sm:text-lg text-blue-950 text-shadow-[10px_2px_8px_whitsmore] text-justify'>La Arte terapia es una disciplina que utiliza los recursos expresivos del arte y del proceso creativo para promover el bienestar emocional, el autoconocimiento y desarrollo personal, así como para explorar emociones que a menudo puede ser difícil expresar con palabras.</p>

             {/* Button Container */}
             <div className=' w-full flex flex-col items-center justify-center sm:justify-start gap-4 px-4 xs:flex-row lg:justify-start'>
              <div className='w-32 h-10 md:w-42 md:h-11 grid items-center justify-center rounded-3xl shadow-buttonOut'>
                <a href='#serviceId' className='w-31 h-9 md:w-41 md:h-10 py-1 rounded-3xl text-primary text-md xs:text-lg text-center  font-medium shadow-buttonIn hover:scale-105 transition-all duration-300 '>Reservar</a>
              </div>
              <div className='w-32 h-10 md:w-42 md:h-11 grid items-center justify-center rounded-3xl shadow-buttonOut'>
                <a href='#serviceId' className='w-31 h-9 md:w-41 md:h-10 py-1 rounded-3xl text-primary text-md sm:text-lg text-center font-medium shadow-buttonIn hover:scale-105 transition-all duration-300 '>Saber más</a>
             </div>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Header
