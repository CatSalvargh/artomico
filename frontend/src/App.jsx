import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'
import MyProfile from './pages/MyProfile'

const App = () => {
  return (
    <div className='mx-4 sm:mx[10%]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/services/:servicetype' element={<Services />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/my-appointments' element={<MyAppointments />}/>
        <Route path='/appointment/:serviceId' element={<Appointment />}/>
      </Routes>    
    </div>
  )
}

export default App
