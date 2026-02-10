import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Fulanita Perez',
    img: assets.profile_pic,
    email: 'fulanitapereza@email.com',
    phone: '+33 678 965 767',
    address: {
      line1: 'Boulevard Sabina Arana, ', 
      line2: 'Apt. 5 ', 
      city: 'Nantes ', 
      PostalCode: '44100, ', 
    },
    gender: 'Mujer',
    DoB: '03-04-2000'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-12 text-darkGray py-5 px-15'>
      <div className='w-[45vw] md:w-[30vw] lg:w-[25vw] md:mt-6 aspect-square'>
        <img className='w-full object-cover rounded-xl shadow-buttonOut' src={userData.img} alt="" />
      </div>

      <div className='flex flex-col'>
        {
        isEdit ?
        <input type="text" value={userData.name} onClick={e => e.target.value = ''} onChange={e =>  setUserData(prev => ({...prev,name:e.target.value}))} className='border border-primary rounded-md pl-2 my-3 md:mt-5'/>
        : 
        <p className='text-primary text-2xl my-3 md:mt-5 text-center md:text-left font-semibold border-b border-lightGray pb-1'>{userData.name}</p>
        }
        <h2 className='text-primary md:text-[1.1rem] font-medium mt-2'>Información de contacto</h2>
        <div className='grid grid-cols-[2fr_4fr] gap-4 mt-3 text-sm sm:text-md'>
          <p className=' font-semibold'>Email:</p>
          <p className='text-blue-600 underline'>{userData.email}</p>
          <p className=' font-semibold'>Teléfono:</p>
          {
          isEdit ?
          <input type="text" value={userData.phone} onClick={e => e.target.value = ''}  onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} className='border border-primary rounded-md pl-2'/>
          :
          <p >{userData.phone}</p>
          }
          <p className='font-semibold'>Dirección:</p>
          {
          isEdit ?
          <p>
            <input type="text" value={userData.address.line1} onClick={e => e.target.value = ''}  onChange={(e) => setUserData(prev => ({...prev,addess: {...prev.address, line1:e.target.value}}))} className='border border-primary rounded-md pl-2 mb-2'/> <br />
            <input type="text" value={userData.address.line2} onClick={e => e.target.value = ''}  onChange={(e) => setUserData(prev => ({...prev,addess: {...prev.address, line2:e.target.value}}))} className='border border-primary rounded-md pl-2 mb-2'/> <br />
            <input type="text" value={userData.address.PostalCode} onClick={e => e.target.value = ''}  onChange={(e) => setUserData(prev => ({...prev,addess: {...prev.address, PostalCode:e.target.value}}))} className='border border-primary rounded-md pl-2 mb-2'/> <br />
            <input type="text" value={userData.address.city} onClick={e => e.target.value = ''}  onChange={(e) => setUserData(prev => ({...prev,addess: {...prev.address, city:e.target.value}}))} className='border border-primary rounded-md pl-2'/>
          </p>
          : 
          <p >{userData.address.line1} <br /> {userData.address.line2} <br /> {userData.address.PostalCode} <br /> {userData.address.city} </p>
          }
        </div>

        <div>
          <h2 className='text-primary text-lg md:text-[1.1rem] font-medium mt-5'>Información adicional</h2>
          <div className='grid grid-cols-[2fr_4fr] gap-y-3 mt-3 text-sm sm:text-md'>
            <p className=' font-semibold'>Género:</p>
             {
              isEdit ? 
              <select value={userData.gender} onChange={(e)=> setUserData(prev =>({...prev, gender: e.target.value}))} className='border border-primary rounded-md pl-2'>
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
                <option value="Otro">Otro</option>
                <option value="Prefiero no contestar">Prefiero no contestar</option>
              </select>
              : 
              <p >{userData.gender}</p>
            }
            <p className='font-semibold'>Cumple:</p>
            {
              isEdit ?
              <input type="date" onChange={(e)=> setUserData(prev =>({...prev, DoB: e.target.value}))} value={userData.DoB} className='border border-primary rounded-md pl-2'/>
              : 
              <p >{userData.DoB}</p>
            }
          </div>
        </div>

        <div className='self-center'>
          {
          isEdit ?
          <button onClick={() => setIsEdit(false)} className='mt-7 px-12 py-1 rounded-[10px] shadow-buttonIn cursor-pointer hover:bg-primary hover:text-white md:text-[1rem] hover:shadow-none hover:scale-110'>Guardar</button>
          : <button onClick={() => setIsEdit(true)} className='mt-7 px-12 py-1 rounded-[10px] shadow-buttonIn cursor-pointer hover:bg-primary hover:text-white md:text-[1rem] hover:shadow-none hover:scale-110'>Editar</button>
        }
        </div>
      </div>
    </div>
  )
}

export default MyProfile
