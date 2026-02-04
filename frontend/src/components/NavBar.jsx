import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

   const navigate = useNavigate();

   const [showMenu, setshowMenu] = useState(false)
   const [token, setToken] = useState(true)

  return (
    <div className='w-screen flex items-center justify-between text-sm p-5 px-12 mb-5 shadow-navbar'>
        <img onClick={() => navigate('/') } className='w-35 sm:w-55 self-center translate-y-1 cursor-pointer' src={assets.logo} alt="" />
        <ul className='lg:flex items-start gap-5 text-[1.15rem] text-primary-light hidden'>
             <NavLink className='bg-primary-med w-30 p-1 text-center text-white rounded-2xl shadow-navButtonIn hover:bg-primary hover:scale-105' to='/'>
                <li className='py-1'>Home</li>
                {/* <hr className='border-none outline-none h-[1.5px] bg-whitesmoke w-10 m-auto hidden'/> */}
             </NavLink>
             <NavLink className='bg-primary-med w-30 p-1 text-center text-white rounded-2xl shadow-navButtonIn hover:bg-primary hover:scale-105' to='/services'>
                <li className='py-1'>Services</li>
                <hr className='border-none outline-none h-[1.5px] bg-whitesmoke w-10 m-auto hidden'/>
             </NavLink>
             <NavLink className='bg-primary-med w-30 p-1 text-center text-white rounded-2xl shadow-navButtonIn hover:bg-primary hover:scale-105' to='/about' >
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-[1.5px] bg-whitesmoke w-10 m-auto hidden'/>
             </NavLink>
             <NavLink className='bg-primary-med w-30 p-1 text-center text-white rounded-2xl shadow-navButtonIn hover:bg-primary hover:scale-105' to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-[1.5px] bg-whitesmoke w-10 m-auto hidden'/>
             </NavLink>
        </ul>
        <div className="flex items-center gap-4">
            {
               token //login logic
               ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                  <img className='w-10 rounded-2xl border-2 border-whitesmoke' src={assets.profile_pic} alt="" />
                  <img className='w-3' src={assets.dropdown_icon} alt="" />
                  <div className='absolute top-0 right-0 pt-14 text-sm font-medium text-primary  z-20 hidden group-hover:block '>
                     <div className='min-w-44 bg-stone-50 rounded flex flex-col gap-4'>
                        <p onClick={() => navigate('./my-profile')} className='p-1 rounded-xl text-center hover:text-white hover:bg-primary  cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate('./my-appointments')} className='p-1 rounded-xl text-center hover:text-white hover:bg-primary  cursor-pointer'>My Appointments</p>
                        <p onClick={()=> setToken(false)} className='p-1 rounded-xl text-center hover:text-white hover:bg-primary  cursor-pointer'>Log out</p>
                     </div>
                  </div>
               </div>
               :<button onClick={() => navigate('/login') } className='bg-primary-light text-white p-1 py-2 rounded-2xl font-light hidden md:block'>Create account</button>
            }
        </div>
    </div>
  )
}

export default NavBar
