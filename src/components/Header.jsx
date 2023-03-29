import React ,{useState}from 'react'
import {NavLink} from 'react-router-dom'
import '../style.css'
import Logo from '../assets/logo3.jpg'

import Signin from './signin'
import Signup from './signup'
import Logout from './Logout'


export default function Header(props) {

  return (
    <div id='head'>

        <div id='head1'> 
     <NavLink  to='/'id='logo' ><img src={Logo} alt="" /></NavLink>
     <NavLink className='bt' to='/'>Home</NavLink>
     <NavLink className='bt' to='/store'>Store</NavLink>
     <NavLink className='bt' to='/about'>About</NavLink>
     <NavLink className='bt' to='/cart'>cart <b>{props.cartCount}</b></NavLink>
     {/* <NavLink className='bt' to='/contacts'>Contacts</NavLink> */}
        </div>

        <div id='head2'>
     <div id='bt'> {props.isUser ?<Logout setIsUser={props.setIsUser}  />  :<Signin setIsUser={props.setIsUser} />} </div>
     <div id='bt'> <Signup setIsUser={props.setIsUser}  /></div>
        </div>

    </div>
  )
}
