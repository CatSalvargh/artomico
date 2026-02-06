import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div>
        <div className='border-t border-lightGray grid grid-col-1 xs:grid-cols-2 sm:px-12 sm:grid-cols-[2fr_1fr_1fr] gap-x-4 my-7 mt-25 text-[0.75rem] md:text-sm text-gray-400'>
            {/*----- left ----- */}
            <div className='col-span-full md:col-span-1 pt-2.5'>
                  <img onClick={() => {navigate('/'); scrollTo(0,0)}} className='w-30 mb-3 self-center translate-y-1 cursor-pointer' src={assets.logo} alt="" />
                  <p className='w-full pr-15 lg:w-2/3 leading-5 text-justify'>Artómica es una comunidad de personas creativas, artistas o no, que encuentran su desarrollo personal y bienestar integral a través de su proceso creativo. Somos un equipo comprometido con el bienestar de las personas que confían en nosotras.</p>
            </div>

            {/*----- mid -----*/}
            <div className='pt-5'>
                <h3 className='text-[0.8rem] md:text-[0.9rem] font-bold text-primary'>Volver a</h3>
                <ul className='flex flex-col gap-1 pt-3 cursor-pointer'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>English Version</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*----- right -----*/}
            <div className='pt-5'>
                <h3 className='text-[0.8rem] md:text-[0.9rem] font-bold text-primary'>Contáctanos</h3>
                <ul className='flex flex-col gap-1 pt-3 cursor-pointer'>
                    <li>+34 942 789 357</li>
                    <li> hola@artomica.com</li>
                </ul>
            </div>

            {/* copyright section */}
            <div className='border-t border-lightGray mt-4 px-5 py-3 text-[0.65rem] text-center col-span-full'>
                <p >Copiright 2026@ Artomicos - All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
