import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

   const navigate = useNavigate();

   const [showMenu, setshowMenu] = useState(false)
   const [token, setToken] = useState(true)
   const [activePage, setActivePage] = useState('')

  return (
   <div className='w-screen flex items-center justify-between gap-5 lg:gap-5 px-4 pr-8 mdlg:pr-12 shadow-navbar'>
      <div className='w-screen flex items-center text-sm p-7 gap-8 mdlg:gap-15 xl:gap-45'>
         <img onClick={() => navigate('/') } className='justify-self-start w-40 mdlg:w-32 lg:w-45 cursor-pointer' src={assets.logo_full} alt="logo" />
         <ul className='mdlg:flex items-start gap-5 text-md font-bold text-white text-center hidden'>
               <NavLink onClick={() => setActivePage('home')} className={`${activePage==='home'? 'bg-amber-400': 'bg-med' } w-25 lg:w-30 p-1 rounded-[3px]  shadow-buttonOut hover:scale-110`} to='/'>Home</NavLink>

               <NavLink onClick={() => setActivePage('services')} className={`${activePage==='services'? 'bg-amber-400': 'bg-med' }  w-25 lg:w-30 p-1 rounded-[3px] shadow-buttonOut hover:scale-110`} to='/services'>Servicios</NavLink>

               <NavLink onClick={() => setActivePage('about')} className={`${activePage==='about'? 'bg-amber-400': 'bg-med' }  w-25 lg:w-30 p-1 rounded-[3px] shadow-buttonOut hover:scale-110`} to='/about' >Conócenos</NavLink>

               <NavLink onClick={() => setActivePage('contact')} className={`${activePage==='contact'? 'bg-amber-400': 'bg-med' }  w-25 lg:w-30 p-1 rounded-[3px] shadow-buttonOut hover:scale-110`} to='/contact'>Contacto</NavLink>
         </ul>
     
         {/* -------- Mobile Menu ----- */}
         <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} mdlg:hidden right-0 top-0 bottom-0 z-20 p-5 overflow-hidden bg-white transition-all`}>
            <div className='justify-self-end flex items-center justify-between px-5 pr-7 py-6'>
               <img onClick={() => navigate('/') } className='w-30 sm:w-45 cursor-pointer' src={assets.logo_full} alt="logo" />
               <img className='w-7 cursor-pointer' onClick={()=> setshowMenu(false)} src={assets.close_menu_icon} alt="imagen cerrar menu" />
            </div>
            <ul className='flex flex-col items-center gap-px mt-5 text-lg text-center text-white font-medium'>
               <NavLink className='bg-med w-screen p-2 rounded-[3px]  hover:bg-primary shadow-buttonOut' onClick={()=> setshowMenu(false)} to='/'>Home</NavLink>

               <NavLink className='bg-med w-screen p-2  rounded-[3px] shadow-buttonOut hover:bg-primary' onClick={()=> setshowMenu(false)} to='/services'>Servicios</NavLink>

               <NavLink className='bg-med w-screen p-2  rounded-[3px] shadow-buttonOut hover:bg-primary' onClick={()=> setshowMenu(false)} to='/about' >Conócenos</NavLink>

               <NavLink className='bg-med w-screen p-2  rounded-[3px] shadow-buttonOut hover:bg-primary' onClick={()=> setshowMenu(false)} to='/contact'>Contacto</NavLink>
               {
            token ?
            <NavLink className='bg-med w-screen p-2  rounded-[3px] shadow-buttonOut hover:bg-primary'  onClick={()=> setshowMenu(false)} to='/login' >Mi perfil</NavLink>
            : <NavLink className='bg-med w-screen p-2 rounded-[3px] shadow-buttonOut hover:bg-primary'  onClick={()=> setshowMenu(false)} to='/login' >Iniciar Sesión</NavLink> }
            </ul>
         </div>
      </div>
         {
         token ?//login logic
         <div className='hidden sm:flex items-center gap-2 w-22 px-4 xl:mr-8 cursor-pointer group relative'>
            <img className=' w-15 xl:w-13 rounded-full border-4 border-light opacity-85' src={assets.profile_pic} alt="imagen perfil usuario" />
            <img className='w-3' src={assets.dropdown_icon} alt="imagen flecha abajo" />
            <div className='absolute top-2 right-0 pt-14 text-md font-medium text-primary z-20 hidden group-hover:block '>
               <div className='flex flex-col min-w-44 bg-gray-50 rounded border border-white'>
                  <p onClick={() => navigate('./my-profile')} className='py-2  text-center hover:text-white hover:bg-primary  cursor-pointer'>Mi Perfil</p>
                  <p onClick={() => navigate('./my-appointments')} className='py-2  text-center hover:text-white hover:bg-primary  cursor-pointer'>Mis citas</p>
                  <p onClick={()=> setToken(false)} className='py-2 text-center hover:text-white hover:bg-primary cursor-pointer'>Cerrar Sesión</p>
               </div>
            </div>
         </div>
         :
         <button onClick={() => navigate('/login') } className='w-40 md:w-32 bg-primary text-white px-1 text-xs py-2 rounded-2xl font-light hidden sm:block'>Iniciar Sesión</button>
         }
      <div className='w-20 mdlg:hidden'>
         <img onClick={()=>setshowMenu(true)} className='w-8' src={assets.menu_icon} alt="imagen menu" />
      </div>
    </div>
  )
}

export default NavBar
