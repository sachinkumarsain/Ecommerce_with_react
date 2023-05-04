import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import "./Ecommerce.css"
import { ecommerceContext } from './Home'
// import "../images"
function Main() {
  const[products,setProducts]=useState([])
  const{cart,setcart}=useContext(ecommerceContext)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((result)=>{
      console.log(result.data)
      setProducts(result.data)
    })
  },[])
  function tiTleExtra(tit){
    return(
      tit.length>30?tit.slice(0,30)+"...":tit
    )
  }
  function extraWord(dec){
    return(
      dec.length>70?dec.slice(0,70)+"......":dec
    )
  }
  function handlerAddToCart(e,index){
    e.preventDefault()
    setcart([...cart,index])

  }
 
  return (
   <>
   <div className='container'>
    <div className='image'>
     
    </div>
    <h1>products</h1>
    <div className='products'>
      {
        products.map((product,index)=>{
          return(
            <div className='product' >
              <h1>{tiTleExtra(product.title)}</h1>
              <img src={product.image}></img>
              <h2 className='rating'>Rate:-{product.rating.rate} count:-{product.rating.count}</h2>
              <h2>price:-{product.price}</h2>
              <p>{extraWord(product.description)}</p>
              <a href='' onClick={(e)=>{handlerAddToCart(e,index)}}>Add to cart</a>
            </div>
          )
        })
      }
    </div>
   </div>

   </>
  )
}

export default Main