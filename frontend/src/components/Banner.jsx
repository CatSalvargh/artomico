import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

  return (
    
  <div className='grid grid-cols-[1.5fr_0.5fr] items-center bg-accent rounded-2xl rounded-br-[800px] rounded-tr-[200px] px-3 md:px-6 sm:px-10 lg:px-12 mt-8 mx-auto gap-6 overflow-visible w-[70vw] h-[40vh] shadow-[3px_3px_8px_#ccdeec,-3px_0_8px_#ccdeec]'>
     {/* left */}
    <div className='creative flex flex-col pt-5 mb-3 pb-8 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-25 gap-4 text-white text-center text-xl md:text-2xl font-bold leading-12 text-shadow-[0px_1px_3px_black]'>
        <p className='2xl:translate-x-80'>Explora tu</p>
        <div className='z-5 w-44 -translate-x-30 p-8 text-shadow-[0px_2px_3px_black]'>
            <p className='creative py-2 w-65 pl-10 text-amber-400 translate-x-20 -translate-y-13 md:translate-x-55 md:-translate-y-10 lg:translate-x-65 xl:translate-x-80 border-dotted border-2 border-whitesmoke rounded-br-full rounded-bl-full rounded-tl-full text-[1.8rem] tracking-widest shadow-navButtonIn backdrop-blur-xs '>
            <span className='text-indigo-500'> CrEa</span>
            Ti
            <span className='text-cyan-500'>ViDa</span>
            d</p>
        </div>
        <p className='md:text-center -translate-y-20 leading-6'>Colorea tu vida</p>
        <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='w-40 px-5 py-2 md:py-3 md:mt-6 mx-autofont-medium border-none rounded-2xl bg-whitesmoke text-primary text-sm -translate-y-10 md:-translate-y-15 md:translate-x-30 xl:translate-x-60 shadow-navButtonIn hover:scale-105'>Registrarme</button>
    </div>

    {/* middle */}
        {/* right */}
    <div className='hidden sm:block w-50 relative -top-22 right-20 sm:-right-8 md:-right-22 md:-top-30 aspect-square -rotate-10 xl:-right-8 bg-[url(/abstract_colors_h.png)] rounded-full bg-cover border-20 border-double border-accent md:scale-130'>
      <img
        src={assets.banner_img3}
        alt="banner"
        className='w-full absolute -top-42 right-2 sm:right-10 md:right-35 md:-top-41 rounded-[15px] translate-y-31 rotate-19 scale-125'
      />
    
    </div>
   </div>
  )
}

export default Banner
