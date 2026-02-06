import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const { serviceId } = useParams()
  const { service_list } = useContext(AppContext)

  // console.log(serviceId)
   const [serviceInfo, setServiceInfo] = useState(null)

  const fetchServiceInfo = async () => {
   const serviceInfo = service_list.find(item => item._id === serviceId)
   setServiceInfo(serviceInfo) 
  }

  useEffect(() => {
    fetchServiceInfo()
  }, [service_list, serviceId])

  return serviceInfo && (
    <div>
      {/* Service details */}
      <div>
        <div>
          <img src={serviceInfo.img} alt="" />
        </div>

        <div>
          <h2>{serviceInfo.name}</h2>
          <p>{serviceInfo.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Appointment
