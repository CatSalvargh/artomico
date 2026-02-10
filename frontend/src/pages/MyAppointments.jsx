import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const {service_list} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 pt-10'>
      <p className='text-xl text-primary font-semibold'>Mis Citas</p>
      <div>
        {
          service_list.slice(0,2).map((item, index)=>(
            <div key={index} className='grid sm:grid-cols-[1fr_3fr_2.5fr] p-3 px-10 xs:px-20 sm:px-5 lg:w-[65vw]'>
              <div className='h-full sm:w-[25vw] md:max-w-50 aspect-square'>
                <img className='w-full h-full object-cover' src={item.img} alt="" />
              </div>
              <div className='flex flex-col gap-2 h-full border-l border-r border-lightGray sm:border-t sm:border-b sm:border-r-0 text-sm p-5 pl-12'>
                <p className='font-semibold text-[1rem]'>{item.name2}</p>
                <p><span className='font-semibold'>Tipo: </span>{item.name}</p>
                <p className='font-semibold'>Dirección:</p>
                <p>Blv Boulay Paty</p>
                <p>44100, Nantes</p>
                <p><span className='font-semibold'>Fecha & Hora: </span><br /> 1 marzo 2026 | 15:30</p>
              </div>
              <div className='flex flex-col gap-5 justify-center items-center  h-full sm:pr-3 md:pr-8 border-l border-r border-b sm:border-t sm:border-l-0 border-lightGray mb-10 sm:mb-0 text-sm lg:text-[1rem]'>
                <button className='w-full max-w-45 px-8 py-1 rounded-[15px]  text-primary shadow-buttonIn cursor-pointer hover:bg-primary hover:text-white hover:shadow-none hover:scale-105'>Pagar Online</button>
                <button className='w-full max-w-45 px-8 py-1 rounded-[15px] text-primary shadow-buttonIn cursor-pointer hover:bg-rose-200 hover:text-red-700 hover:shadow-none hover:scale-105'>Cancelar</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments
