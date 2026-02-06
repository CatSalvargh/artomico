import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import GetDateInfo from '../support/GetDateInfo'
import RelatedServices from '../components/RelatedServices'

const Appointment = () => {

  const { serviceId } = useParams()
  const { service_list, ccySymbol } = useContext(AppContext)
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

  const [ serviceInfo, setServiceInfo ] = useState({})
  const [ freeSlots, setFreeSlots ] = useState([])
  const [ slotIndex, setSlotIndex ] = useState(0)
  const [ slotTime, setSlotTime ] = useState('')

  //Get service details + useEffect to update info when service changes
  const fetchServiceInfo = async () => {
   const serviceInfo = service_list.find(item => item._id === serviceId)
   setServiceInfo(serviceInfo)
  }

  useEffect(() => {
    fetchServiceInfo()
  }, [service_list, serviceId])

  //Get availability details 
  const getAvailableSlots = async () => {
    setFreeSlots([])

    //getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i) //get 7 days from today

      // Setting and time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(17,0,0,0)

      //setting hours from the current hour (ignore previous hours)
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() >= 9 ? currentDate.getHours() + 1 : 9)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(9)
        currentDate.setMinutes(30)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

          //Save slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })

          //Increment time by 30min
          currentDate.setMinutes(currentDate.getMinutes() + 120)
      }

      setFreeSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    getAvailableSlots()
  }, [serviceInfo])

  // useEffect(() => {
  //   console.log(freeSlots)
  // }, [freeSlots])

  return serviceInfo && (
    <div className='w-[70vw] pt-8 m-auto'>
      {/* Service details */}
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='xs:w-40 md:w-180 lg:w-120 aspect-square'>
          <img className=' w-full h-full border-3 border-accent rounded-md object-cover' src={serviceInfo.img} alt="" />
        </div>

        <div className='flex flex-col gap-2.5 border border-lightGray p-4 py-5 xl:p-10'>
          <h2 className='text-primary font-semibold md:text-lg'>{serviceInfo.name2}</h2>
          <p className='text-darkGray text-sm md:text-[1rem] text-justify'>{serviceInfo.description}</p>
            {
              serviceInfo.price?
            <div className='flex gap-4 text-darkGray text-xs md:text-sm mt-2'>
              <p className='font-semibold'>Precio: <span className='font-light'>{serviceInfo.price}{ccySymbol}</span></p>
              <p className='font-semibold'>Duración: <span className='font-light'>{serviceInfo.duration}</span></p>
            </div>:''
            }
        </div>
      </div>

      {/* Booking Slots */}
      <div className='pl-4 mt-4 font-medium text-darkGray'>
        <p>Selecciona fecha y hora</p>
        <div className='flex gap-3 items-center overflow-x-scroll mt-4'>
          {
            freeSlots.length && freeSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-xs md:text-[0.8rem] font-semibold text-center py-1 min-w-16 rounded-xl cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-lightGray text-neutral-500'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-5'>
          {
            freeSlots.length && freeSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} className={`text-xs md:text-[0.8rem] font-light shrink-0 px-5 py-1 border border-lightGray rounded-[5px] cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'border border-lightGray text-neutral-500'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>

        <button className='mt-6 px-10 py-1 rounded-[3px] shadow-buttonIn cursor-pointer hover:bg-primary hover:text-white hover:shadow-none hover:scale-110'>Reservar</button>
      </div>

      {/* Related services */}
  <RelatedServices serviceId={serviceId} servicetype={serviceInfo ? serviceInfo.servicetype : ''}/>
    </div>  
  )
}

export default Appointment
