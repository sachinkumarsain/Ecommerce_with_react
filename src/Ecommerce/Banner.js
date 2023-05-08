import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Ecommerce.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Banner() {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {
                setBanner(result.data[Math.floor(Math.random() * result.data.length)])
                console.log(result.data)
                Window.onscroll=()=>{
                    setBanner(window.scrollY>700?true:false)
                }
            })
    }, [])
    return (
        <>
            <div className='banner'>
                <div className='leftSaide'>
                    <h1>{banner.title}</h1>
                    <h2> Price:- {banner.price} <CurrencyRupeeIcon/></h2>
                    <p>{banner.description}</p>
                </div>
                <div className='rightSaide'>
                    <img src={banner.image}></img>
                </div>
            </div>
        </>
    )
}

export default Banner