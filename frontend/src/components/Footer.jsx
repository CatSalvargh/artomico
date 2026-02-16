import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div>
        <div className='border-t border-lightGray grid grid-col-1 xs:grid-cols-2 sm:px-12 sm:grid-cols-[2fr_1fr_1fr] gap-x-4 mt-15 md:mt-20 text-[0.75rem] md:text-sm text-gray-400'>
            {/*----- left ----- */}
            <div className='w-full col-span-full md:col-span-1 pt-2.5'>
                  <img onClick={() => {navigate('/'); scrollTo(0,0)}} className='w-30 mb-3 self-center translate-y-1 cursor-pointer' src={assets.logo} alt="logo" />
                  <p className='w-full pr-15 leading-5 text-justify'>Artómica es una comunidad de personas creativas, artistas o no, que encuentran su desarrollo personal y bienestar integral a través de su proceso creativo. Somos un equipo comprometido con el bienestar de las personas que confían en nosotras.</p>
            </div>

            {/*----- mid -----*/}
            <div className='pt-5'>
                <h3 className='text-[0.8rem] md:text-[0.9rem] font-bold text-primary'>Ir a</h3>
                <ul className='flex flex-col gap-0.5 pt-3 cursor-pointer'>
                    <li onClick={() => {navigate('/'); scrollTo(0,0)}}>Home</li>
                    <li onClick={() => {navigate('/services'); scrollTo(0,0)}}>Servicios</li>
                    <li onClick={() => {navigate('/about'); scrollTo(0,0)}}>Conócenos</li>
                    <li onClick={() => {navigate('/'); scrollTo(0,0)}}>English Version</li>
                    <li onClick={() => {navigate('/'); scrollTo(0,0)}}>Privacy Policy</li>
                </ul>
            </div>
            {/*----- right -----*/}
            <div className='pt-5'>
                <h3 className='text-[0.8rem] md:text-[0.9rem] font-bold text-primary'>Contáctanos</h3>
                <ul className='flex flex-col gap-1 pt-3 cursor-pointer'>
                    <li>+33 668 608 817</li>
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
