import React from 'react'
import Main from './Main'
import Header from './Header'
import About from './About'
import "./Ecommerce.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'

function Home() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}> </Route>
                    <Route path="/about" element={<About />}>  </Route>
                    <Route path="/cart" element={<Cart />}>  </Route>
                </Routes>
                <Main />
            </BrowserRouter>
        </>
    )
}

export default Home