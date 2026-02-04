import React from 'react'
import { option_list } from '../assets/assets'
import { Link } from 'react-router-dom'

const ServiceMenu = () => {
  return (
    <div id='serviceId' className='flex flex-col items-center gap-3 py-10 text-primary mt-5'>
      <h1 className='font-bold text-xl py-5'>Selecciona el tipo de sesión</h1>
  <div className='grid grid-flow-col auto-cols-[minmax(180px,1fr)] gap-6 w-full overflow-x-auto py-3 shadow-navbar'>
        {option_list.map((item, index) => (
          <Link onClick={(() => scrollTo(0,0))} className='flex flex-col items-center gap-2 py-4 text-sm font-medium cursor-pointer hover:-translate-y-2.5 hover:scale-110 transition-all duration-300  ' key={index} to={`/appointment/${item.service}`} >
            <img className='rounded-full w-10 aspect-square lg:w-30 object-cover border-10 border-double border-accent' src={item.option_img} alt={item.option_name} />
            <p className=' text-center text-[1.15rem] font-bold'>{item.option_name}</p>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default ServiceMenu
