import React from 'react'
import { Link } from 'react-router-dom'
import "./Ecommerce.css"
function Header() {
  return (
   <header>
    <h1>Ecommerce</h1>
    <ul>
        <li >
            <Link to="/">Home</Link>
        </li>
        <li >
            <Link to="/about">About</Link>
        </li>
        <li >
            <Link to="/cart">Cart</Link>
        </li>
        
    </ul>
   </header>
  )
}

export default Header