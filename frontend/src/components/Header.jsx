import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[80vw] h-[35vw] m-auto relative rounded-2xl bg-[url(/blueflowerMain.jpg)] bg-cover bg-no-repeat'>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
            <h2 className='text-whitesmoke sm:text-3xl md:text-4xl lg:text-5xl text-shadow-[0_3px_7px_#49557e]'>Order your favourite Artworks here</h2>
             <p className='font-medium text-primary text-shadow-[0_1px_8px_whitesmoke]'>Chose from a diverse collection featuring incredibly creative pieces of art, created by emerging artists that are consolidating their careers in their respective countries.</p>
             <a href='#serviceId' className='bg-whitesmoke px-10 py-2 rounded-3xl text-primary-light font-medium border-none hover:bg-primary hover:text-whitesmoke hover:scale-110 transition-all duration-300 shadow-lg shadow-gray-400'>Book</a>
        </div>
    </div>
  )
}

export default Header
