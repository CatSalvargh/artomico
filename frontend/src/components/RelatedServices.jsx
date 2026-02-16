import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

// Destructure props correctly: component receives a single props object
const RelatedServices = ({ serviceId, servicetype }) => {

    const { service_list } = useContext(AppContext)
    const [ relatedService, setRelatedService ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
    if (service_list && service_list.length > 0 && servicetype) {
      // service_list items use `servicetype` to indicate type
      const serviceData = service_list.filter((doc) => doc.servicetype === servicetype && doc._id !== serviceId)
            setRelatedService(serviceData)
        }
    }, [service_list, serviceId, servicetype])
     
  return (
    <div className='flex flex-col gap-3 mt-2 text-primary text-center'>
      <h1 className='font-bold text-xl'>Servicios relacionados</h1>
      <p>Otras áreas que te pueden interesar</p>
      <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(120px,200px))] justify-center'>
        { relatedService.slice(0,4).map((item, index) => (
            <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='shadow-navbar rounded-2xl cursor-pointer hover:scale-105 transition-all duration-400' key={item._id || index}>
                <div className='aspect-square'>
          <img className='border-3 border-accent rounded-md object-cover' src={item.img} alt={`imagen de ${item.name2}`} />
                </div>
                <div className='flex flex-col gap-3 pt-2 px-4 text-primary'>
                    <h4 className='font-medium'>{item.name}</h4>
                    <p className='text-sm text-justify'>{item.description}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/services'); scrollTo(0,0)}} className='w-35 self-center mt-6 bg-none px-3 py-2 rounded-3xl text-primary font-medium border-none hover:bg-primary hover:text-whitesmoke hover:scale-110 transition-all duration-300 shadow-lg shadow-ButtonOut'>Ver más</button>
    </div>
  )
}

export default RelatedServices
