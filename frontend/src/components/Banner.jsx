import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Banner = () => {

  return (
    
  <div className='grid grid-cols-[1.5fr_0.5fr] items-center bg-accent rounded-2xl rounded-br-[800px] rounded-tr-[200px] px-3 md:px-6 sm:px-10 lg:px-12 mt-8 mx-auto gap-6 overflow-visible w-[70vw] h-[40vh] shadow-header'>
     {/* left */}
    <div className='flex flex-col pt-5 mb-3 pb-8 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-25 gap-4 text-white text-center text-xl md:text-2xl font-bold leading-12 text-shadow-[0px_1px_3px_black]'>
        <p className='2xl:translate-x-80'>Explora tu</p>
        <div className='z-5 w-44 font-extrabold -translate-x-30 p-8 italic text-shadow-[0px_2px_3px_black]'>
            <p className='py-2 w-65 pl-10 text-amber-400 translate-x-20 -translate-y-13 md:translate-x-55 md:-translate-y-10 lg:translate-x-65 xl:translate-x-80 border-dotted border-2 border-whitesmoke rounded-br-full rounded-bl-full rounded-tl-full text-[1.8rem] tracking-widest shadow-navButtonIn backdrop-blur-xs '>
            <span className='text-indigo-500'> Crea</span>
            ti
            <span className='text-cyan-500'>Vida</span>
            d</p>
        </div>
        <p className='md:text-center -translate-y-20 leading-6'>Colorea tu vida</p>
        <button className='md:mt-6 mx-auto w-40 px-5 font-medium border-none rounded-2xl bg-whitesmoke text-primary text-sm py-2 -translate-y-18'>Registrarme</button>
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

//  <div className='grid grid-cols-1 lg:grid-cols-[2fr_0.5fr_0.5fr] items-center bg-primary-med rounded-2xl rounded-br-[200px] rounded-tr-[220px] px-6 sm:px-10 lg:px-12 mt-25 lg:mt-40 mx-auto gap-6 overflow-visible w-[80vw] h-[40vh]'>
//      {/* left */}
//     <div className='flex flex-col pt-16 mb-3 sm:items-end pb-8 gap-5 text-whitesmoke text-3xl font-bold leading-12 text-shadow-[2px_4px_10px_indigo]'>
//         <p >Explora tu</p>
//         <p className='hidden sm:block'>Mejora tu vida</p>
//     </div>

//     {/* middle */}
//         <div className='w-44 font-extrabold'>
//             <p className='bg-amber-200 py-2 w-80 pl-5 text-green-400 -translate-y-12 rounded-full text-[1.8rem] text-shadow-[2px_4px_8px_white]'>
//             <span className='text-fuchsia-600'> Crea</span>
//             ti
//             <span className='text-indigo-600'>Vida</span>
//             d</p>
//         </div>
//         {/* right */}
//     <div className='relative z-20 w-100 h-50 overflow-visible'>
//       <img
//         src={assets.banner_img3}
//         alt="banner"
//         className='absolute -top-42 right-2 md:-top-5 md:right-30 rounded-[105px] -translate-y-20 rotate-59 scale-115 '
//         // className='absolute -top-28 right-9 rounded-[105px] -translate-y-20 rotate-59 scale-115 '
//       />
//     </div>
//     {/* <button className='w-60 px-10 font-light border-none rounded-2xl bg-whitesmoke text-primary text-[1.2rem]'>Regístrate</button> */}
//    </div>