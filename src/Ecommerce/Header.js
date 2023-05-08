import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Ecommerce.css"
import { ecommerceContext } from './Home'
function Header() {
    const { cart } = useContext(ecommerceContext)
    const [header1, setHeader1] = useState(false)
    window.onscroll = () => {
        setHeader1(window.scrollY > 500 ? true : false)
    }
    return (
        <header className={header1 ? "dark" : ""}>
            <h1>Ecommerce</h1>
            <ul>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li >
                    <Link to="/about">About</Link>
                </li>


            </ul>
            <h2>< Link to="/cart">Cart:- <span className='count'>{cart.length}</span></Link></h2>
        </header>
    )
}

export default Header