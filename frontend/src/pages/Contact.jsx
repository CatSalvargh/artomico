import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='flex flex-col items-center px-10 text-center text-darkGray'>
      <h1 className='font-bold text-primary lg:text-2xl mt-12 mb-6 lg:mb-12'>Contáctanos</h1>
      <div className='flex flex-col md:flex-row gap-7 md:gap-12'>
        <div className='hidden xs:block max-w-60 aspect-square'>
          <img className='rounded-full' src={assets.contact_img} alt="" />
        </div>
        <div className='lg:mt-2'>
          <h3 className='font-medium text-primary'>Dónde estamos</h3>
          <p className='mb-6'>Blv Boulay Paty,
            <br />44100,
            <br />Nantes
          </p>
          <h3 className='font-medium text-primary'>Correo electrónico</h3>
          <p className='mb-6'>hola@artomica.com</p>
          <h3 className='font-medium text-primary md:txt-lg'>Teléfono</h3>
          <p className='mb-6'>+33 668 608 817</p>
        </div>
      </div>

    </div>
  )
}

export default Contact
