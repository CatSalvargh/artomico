import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

   const navigate = useNavigate();

   const [showMenu, setshowMenu] = useState(false)
   const [token, setToken] = useState(true)

  return (
    <div className='w-screen flex items-center justify-between text-sm p-5 px-12 mb-5 shadow-navbar'>
        <img onClick={() => navigate('/') } className='w-35 sm:w-55 self-center translate-y-1 cursor-pointer' src={assets.logo_full} alt="" />
        <ul className='lg:flex items-start gap-5 text-md font-bold text-light hidden'>
             <NavLink className='w-30 p-1 text-center text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/'>Home</NavLink>

             <NavLink className=' w-30 p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/services'>Servicios</NavLink>

             <NavLink className=' w-30 p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/about' >Conócenos</NavLink>

             <NavLink className=' w-30 p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/contact'>Contacto</NavLink>
        </ul>
        <div className="flex items-center gap-4">
            {
            token ?//login logic
            <div className='hidden md:flex items-center gap-2 cursor-pointer group relative py-3'>
               <img className=' w-12 xl:w-13 rounded-full border-4 border-double border-accent' src={assets.profile_pic} alt="" />
               <img className='w-3' src={assets.dropdown_icon} alt="" />
               <div className='absolute top-0 right-0 pt-14 text-sm font-medium text-primary z-20 hidden group-hover:block '>
                  <div className='min-w-44 bg-stone-50 rounded flex flex-col gap-4'>
                     <p onClick={() => navigate('./my-profile')} className='p-1 rounded-[10px] text-center hover:text-white hover:bg-primary  cursor-pointer'>Mi Perfil</p>
                     <p onClick={() => navigate('./my-appointments')} className='p-1 rounded-[10px] text-center hover:text-white hover:bg-primary  cursor-pointer'>Mis citas</p>
                     <p onClick={()=> setToken(false)} className='p-1 rounded-[10px] text-center hover:text-white hover:bg-primary  cursor-pointer'>Cerrar Sesión</p>
                  </div>
               </div>
               </div>
            :
            <button onClick={() => navigate('/login') } className='bg-primary text-white px-7 py-2 rounded-2xl font-light hidden md:block'>Iniciar Sesión</button>
            }
         </div>
         
         <img onClick={()=>setshowMenu(true)} className='w-10 md:hidden' src={assets.menu_icon} alt="" />
      
         {/* -------- Mobile Menu ----- */}
         <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 p-5 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 pr-7 py-6'>
               <img onClick={() => navigate('/') } className='w-30 sm:w-55 cursor-pointer' src={assets.logo_full} alt="" />
               <img className='w-10 cursor-pointer' onClick={()=> setshowMenu(false)} src={assets.close_menu_icon} alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
               <NavLink className='w-full p-1 text-center text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' onClick={()=> setshowMenu(false)} to='/'>Home</NavLink>

               <NavLink className='w-full p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' onClick={()=> setshowMenu(false)} to='/services'>Servicios</NavLink>

               <NavLink className='w-full p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' onClick={()=> setshowMenu(false)} to='/about' >Conócenos</NavLink>

               <NavLink className='w-full p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' onClick={()=> setshowMenu(false)} to='/contact'>Contacto</NavLink>
            </ul>
         </div>
         {/* //Aqu'i iba el div de despues de la imagen de perfil */}
    </div>
  )
}

export default NavBar
