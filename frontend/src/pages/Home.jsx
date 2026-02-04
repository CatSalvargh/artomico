
import React from 'react'
import Header from '../components/Header'
import ServiceMenu from '../components/ServiceMenu'
import MoreInfo from '../components/MoreInfo'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <ServiceMenu/>
      <MoreInfo/>
      <Banner/>
    </div>
  )
}

export default Home
