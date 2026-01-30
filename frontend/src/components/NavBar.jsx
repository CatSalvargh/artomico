import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    // const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
             <NavLink >
                <li>Home</li>
                <hr />
             </NavLink>
             <NavLink >
                <li>Services</li>
                <hr />
             </NavLink>
             <NavLink >
                <li>About</li>
                <hr />
             </NavLink>
             <NavLink >
                <li>Contact</li>
                <hr />
             </NavLink>
        </ul>
        <div className="navbar-right">
            <button>Create account</button>
        </div>
    </div>
  )
}

export default NavBar
