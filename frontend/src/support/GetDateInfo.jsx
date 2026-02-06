
import React, { useContext, useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const GetDateInfo = (info) => {

    const [ serviceInfo, setServiceInfo ] = useState(info)
    const fetchServiceInfo = async () => {
    const serviceInfo = service_list.find(item => item._id === serviceId)
    setServiceInfo(serviceInfo) 
    }

  return (
    serviceInfo
  )
}

export default GetDateInfo
