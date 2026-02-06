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
             <NavLink className='w-30 p-1 text-center text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/'>
                <li className='py-1'>Home</li>
             </NavLink>
             <NavLink className=' w-30 p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/services'>
                <li className='py-1'>Servicios</li>
             </NavLink>
             <NavLink className=' w-30 p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/about' >
                <li className='py-1'>Conócenos</li>
             </NavLink>
             <NavLink className=' w-30 p-1 text-center  text-primary rounded-[3px] shadow-buttonIn hover:bg-primary hover:text-white hover:shadow-none hover:scale-110' to='/contact'>
                <li className='py-1'>Contacto</li>
             </NavLink>
        </ul>
        <div className="flex items-center gap-4">
            {
               token //login logic
               ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                  <img className='w-12 xl:w-13 rounded-full border-4 border-double border-accent' src={assets.profile_pic} alt="" />
                  <img className='w-3' src={assets.dropdown_icon} alt="" />
                  <div className='absolute top-0 right-0 pt-14 text-sm font-medium text-primary z-20 hidden group-hover:block '>
                     <div className='min-w-44 bg-stone-50 rounded flex flex-col gap-4'>
                        <p onClick={() => navigate('./my-profile')} className='p-1 rounded-[10px] text-center hover:text-white hover:bg-primary  cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate('./my-appointments')} className='p-1 rounded-[10px] text-center hover:text-white hover:bg-primary  cursor-pointer'>My Appointments</p>
                        <p onClick={()=> setToken(false)} className='p-1 rounded-[10px] text-center hover:text-white hover:bg-primary  cursor-pointer'>Log out</p>
                     </div>
                  </div>
               </div>
               :<button onClick={() => navigate('/login') } className='bg-light text-white p-1 py-2 rounded-2xl font-light hidden md:block'>Create account</button>
            }
        </div>
    </div>
  )
}

export default NavBar
