import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const Services = () => {
  
  const { servicetype } = useParams()
  const { service_list } = useContext(AppContext)
  const [filterList,setFilterList] = useState([])
  const navigate = useNavigate()
  const [showFilter, setShowFilter ] = useState(false)
  const [activeServ, setActiveServ ] = useState('')
  
  //Match Filter list by servicetype
  const applyFilter = () => {
    if (servicetype) {
      setFilterList(service_list.filter(service => service.servicetype === servicetype))
    } else {
      setFilterList(service_list)
    }
  }

  // //update filter every time the service/type changes
  useEffect(() => {
    applyFilter() 
  }, [service_list, servicetype])

  return (
    <div className='grid md:grid-cols-[0.5fr_3fr] gap-6 gap-x-12 pt-8 px-8 md:p-6'>
      {/* left */}
      <div>
        <div>
          <p className='hidden sm:block text-primary text-center font-semibold border-b border-lightGray pb-1'>Filtrar por</p>
          <button onClick={()=> setShowFilter(prev => !prev)} className={`p-1 border rounded text-sm w-20 transition all sm:hidden ${
            showFilter ? 'bg-primary text-white' : '' }`}>Filtrar</button>          
          <div className={`${showFilter ? 'flex' : 'hidden'} sm:flex justify-start md:flex-col w-[80vw] md:w-[20vw] md:max-w-50 gap-3 flex-wrap mt-4 text-center text-primary font-semibold'`}>

            <p onClick={()=> {navigate('/services'); setActiveServ('all')}} className='px-3 py-1 rounded-[3px] shadow-buttonIn hover:scale-105 cursor-pointer'>Ver todos</p>

            <p onClick={()=> {navigate('/services/adults'); setActiveServ('adult')}} className={`${activeServ ==='adult'? 'bg-med shadow-none text-white': '' } px-3 py-1 rounded-[3px] shadow-buttonIn hover:scale-105 cursor-pointer`}>Adulto</p>

            <p onClick={()=> {navigate('/services/kids'); setActiveServ('kid')}} className={`${activeServ ==='kid'? 'bg-med shadow-none text-white': '' } px-3 py-1 rounded-[3px] shadow-buttonIn hover:scale-105 cursor-pointer`}>Niño</p>

            <p onClick={()=> {navigate('/services/groups'); setActiveServ('group')}} className={`${activeServ ==='group'? 'bg-med shadow-none text-white': '' } px-3 py-1 rounded-[3px] shadow-buttonIn hover:scale-105 cursor-pointer`}>Grupo</p>

            <p onClick={()=> {navigate('/services/pro_Schools'); setActiveServ('pro')}} className={`${activeServ ==='pro'? 'bg-med shadow-none text-white': '' } px-3 py-1 rounded-[3px] shadow-buttonIn hover:scale-105 cursor-pointer`}>Pro y Escuelas</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className='This w-full grid gap-6 grid-cols-[repeat(auto-fit,minmax(120px,180px))] justify-center md:justify-start'>
        {
          filterList.map((item, index) => (
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='w-full h-fit md:h-60 shadow-navbar rounded-2xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-400' key={index}>
                <div className='mx-auto aspect-square'>
                    <img className='object-cover w-full h-full rounded-t-2xl' src={item.img} alt={`imagen de ${item.name2}`} />
                </div>
                <div className='flex flex-col gap-3 pt-2 px-4 text-primary text-sm'>
                    <h4 className='font-medium text-center py-1'>{item.name}</h4>
                    {/* <p className='text-sm text-justify'>{item.description}</p> */}
                    <div className='text-xs text-right'>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
