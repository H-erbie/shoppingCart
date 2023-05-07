import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { useGlobalContext } from '../Context'
const Navbar = () => {
  const {amount} = useGlobalContext();
  return (
    <nav className='nav-container'>
        <div className="app-name">UseReducer</div>
        <div className="cart">
            <span className="cart-icon">
            <FaCartPlus/></span>
            <span className="item-num">{amount}</span>
        </div>
    </nav>
  )
}

export default Navbar