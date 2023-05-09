import React, { createContext, useState } from 'react'
import Main from './Main'
import Header from './Header'
import About from './About'
import "./Ecommerce.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
export const ecommerceContext = createContext({})


function Home() {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem("product")!==null) ? JSON.parse(localStorage.getItem("product")):[])
    
    return (
        <>
            <ecommerceContext.Provider value={{ cart, setcart }}>
                <BrowserRouter>
                    <Header />
                   
                    <Routes>
                        <Route path="/" element={<Main/>}> </Route>
                        <Route path="/about" element={<About />}>  </Route>
                        <Route path="/cart" element={<Cart />}>  </Route>
                    </Routes>
                </BrowserRouter>
            </ecommerceContext.Provider>
        </>
    )
}

export default Home