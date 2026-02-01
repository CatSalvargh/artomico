import React from 'react'
import { option_list } from '../assets/assets'
import { Link } from 'react-router-dom'

const ServiceMenu = () => {
  return (
    <div id='serviceId' className='flex flex-col items-center gap-3 py-10 text-primary'>
      <h1 className='font-bold text-xl'>Select your session type</h1>
      <p className='w-full text-center text-md text-justified text-primary-light'>Check all the resources our team can offer and pick the approach that resonates best with you.</p>
      <div className='flex sm:justify-center gap-10 w-full overflow-scroll'>
        {option_list.map((item, index) => (
          <Link className='flex flex-col items-center gap-2 py-4 text-sm font-medium cursor-pointer hover:-translate-y-2.5 hover:scale-110 transition-all duration-300  ' key={index} to={`/appointment/${item.service}`} >
            <img className='rounded-full w-20 h-20 lg:w-30 lg:h-30 object-cover hover:border-4 border-primary-light' src={item.option_img} alt={item.option_name} />
            <p className='text-center'>{item.option_name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServiceMenu
