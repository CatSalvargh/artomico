import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form className='w-[90vw] xs:w-[70vw] md:w-[40vw] mx-auto mt-10 border-lightGray  p-4 pt-8 md:pt-4 text-sm sm:text-[1rem] lg:text-lg' action="">
        <div className='flex flex-col items-center text-center gap-3 md:w-[50vw] lg:w-[40vw] h-full p-2 pt-8 lg:pt-6 mx-auto text-darkGray border border-lightGray rounded-[7px] shadow-navbar'>
          <p className='text-primary font-semibold'>{state==='Sign Up'?'Crear Cuenta':'Iniciar Sesión'}</p>
          <p className='text-[1rem] my-4'>{state==='Sign Up'?'Crear una cuenta':'Accede a tu perfil'} para reservar</p>

          {
          state==='Sign Up'?
          <div >
            <label className='block text-primary font-medium' for='name'>Nombre Completo</label>
            <input className='h-7 w-full md:w-70 border border-lightGray rounded-lg' type="text" onChange={(e) =>{setName(e.target.name)}} id='name' name='name' value={name} required/>
          </div> : ''
          }
        
          <div>
            <label className='block text-primary font-medium' for='email'>Email</label>
            <input className='border border-lightGray rounded-lg h-7 w-full md:w-70' type="email" onChange={(e) =>{setName(e.target.email)}} id='email' name='email' value={email} required/>
          </div>
          <div>
            <label className='block text-primary font-medium' for='password'>Contraseña</label>
            <input className='border border-lightGray rounded-lg h-7 w-full md:w-70' type="password" onChange={(e) =>{setName(e.target.password)}} id='password' name='password' value={password} required/>
          </div>
          <button className='mt-6 px-8 py-1 rounded-[10px] shadow-buttonIn cursor-pointer hover:bg-primary hover:text-white md:text-[1rem] hover:shadow-none hover:scale-110'>{state==='Sign Up'?'Crear Cuenta':'Conectarse'}</button>
          {state==='Sign Up'?
           <p className='text-sm'>Ya tienes una cuenta? <span onClick={()=> setState('Login')} className='text-primary underline cursor-pointer'>Conéctate</span></p> :
           <p className='text-sm'>Crea una cuenta <span onClick={()=> setState('Sign Up')}className='text-primary underline cursor-pointer'>aquí</span></p>
          }
           
        </div>
      </form>
    </div>
  )
}

export default Login
