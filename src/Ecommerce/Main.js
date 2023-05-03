import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Ecommerce.css"
function Main() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((result)=>{
      console.log(result.data)
      setProducts(result.data)
    })
  },[])
  function extra(product){
    if(product.description.lenth>40){
      return product.description.slice(0,40)+"....."
    }
    else{
      return product.description
    }
  }
  function extra(product){
    if(product.description.lenth>40){
      return product.description.slice(0,40)+"....."
    }
    else{
      return product.description
    }
  }
  return (
   <>
   <div className='container'>
    <h1>products</h1>
    <div className='products'>
      {
        products.map((product,index)=>{
          return(
            <div className='product' >
              <h1>{product.title}</h1>
              <img src={product.image}></img>
              <h2>price:-{product.price}</h2>
              <p>{extra(product)}</p>
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