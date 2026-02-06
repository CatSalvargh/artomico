import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

//Replaces TopDoc
const MoreInfo = () => {

  const navigate = useNavigate()
  const { service_list } = useContext(AppContext)

  return (
    <div className='flex flex-col gap-3 mt-2 text-primary text-center'>
      <h1 className='font-bold text-xl'>Top servicios e información</h1>
      <p>Seas un individuo, grupo, madre o padre, tenemos el soporte adecuado para tu situación y la de los los tuyos</p>
  <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center gap-8 pt-5 gap-y-6'>
        { service_list.slice(0,4).map((item, index) => (
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='shadow-navbar rounded-2xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-400' key={index}>
                <div className='mx-auto aspect-square'>
                    <img className='object-cover w-full h-full rounded-t-2xl' src={item.img} alt="" />
                </div>
                <div className='flex flex-col gap-3 pt-2 px-4 text-primary'>
                    <h4 className='font-medium'>{item.name}</h4>
                    <p className='text-sm text-justify'>{item.description}</p>
                    <div className='text-xs text-right'>
                    </div>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/services'); scrollTo(0,0)}} className='w-35 self-center mt-6 bg-none px-3 py-2 rounded-3xl text-primary font-medium border-none hover:bg-primary hover:text-whitesmoke hover:scale-110 transition-all duration-300 shadow-lg shadow-ButtonOut'>Ver más</button>
    </div>
  )
}

export default MoreInfo
