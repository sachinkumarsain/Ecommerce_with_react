import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import "./Ecommerce.css"
import { ecommerceContext } from './Home'
import Cart from './Cart'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { json } from 'react-router'
// import "../images"
function Main() {
  const [products, setProducts] = useState([])
  const [randomProduct, setrandomProduct]=useState([])
  const { cart, setcart } = useContext(ecommerceContext)

  useEffect(()=>{
    localStorage.setItem("product",JSON.stringify(cart))
  },[cart])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((result) => {
        setProducts(result.data)
      })
  }, [])
  function tiTleExtra(tit) {
    return (
      tit.length > 30 ? tit.slice(0, 30) + "..." : tit
    )
  }
  function extraWord(dec) {
    return (
      dec.length > 50 ? dec.slice(0, 50) + "......" : dec
    )
  }
  function handlerAddToCart(e, index) {
    e.preventDefault()
    setcart([...cart, products[index]])

  }
  function handlerDeleteToCard(e,index){
    e.preventDefault()
    cart.forEach((c)=>{
      if(c.id===index){

      }
    })
  }
  console.log(cart)

  function exitInCart(productId) {
    let exits = false;
    cart.forEach((e) => {
      if (e.id === productId) {
        exits = true
      }
    })
    return exits
  }
  function setrandom(){
  setrandomProduct(products[Math.floor(Math.random()*products.length)]);
  console.log(randomProduct)
  console.log(randomProduct)
}

  

  return (
    <>
      <div className='container'>
        <div className='image'>
          {
            setrandom()
          }
        </div>
        <h1>products</h1>
        <div className='products'>
          {
            products.map((product, index) => {
              return (
                <div className='product' >
                  <h1>{tiTleExtra(product.title)}</h1>
                  <img src={product.image}></img>
                  <h2 className='rating'>Rate:-{product.rating.rate} count:-{product.rating.count}</h2>
                  <h2>< CurrencyRupeeIcon/>{product.price}</h2>
                  <p>{extraWord(product.description)}</p>
                  <h3>
                    {exitInCart(product.id) ? (<a href='#' onClick={(e)=>{handlerDeleteToCard(e,index)}}>Added To Card</a>) : (<a href='' onClick={(e) => { handlerAddToCart(e, index) }}>Add To Cart</a>)
                  }
                  </h3>
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