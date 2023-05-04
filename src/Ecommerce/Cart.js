import React, { useContext, useState } from 'react'
import { ecommerceContext } from './Home'
import DeleteIcon from '@mui/icons-material/Delete';


function Cart() {
  const { cart, setcart } = useContext(ecommerceContext)
  function handlerDeleteInCard(e, item) {
    e.preventDefault()
    console.log(item)
    setcart(cart.filter(cartItem =>cartItem.id !== item ))
   
  }

  return (
    <section className='count'>
      <h1>select Product</h1>
      <div className='counts'>
        {
          cart.map((item, index) => {
            return (
              <div className='cartitems' key={item.id}>
                <div className='left'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='right'>
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                 <a href=' 'onClick={(e)=>{handlerDeleteInCard(e,item.id)}}>Delete< DeleteIcon /></a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Cart