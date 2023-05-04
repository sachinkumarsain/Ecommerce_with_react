import React, { useContext, useState } from 'react'
import { ecommerceContext } from './Home'
import { Link } from 'react-router-dom'


function Cart() {
  const { cart, setCart } = useContext(ecommerceContext)
  function handlerDeletecart(e, item) {
    e.preventDefault()
    setCart(cart.filter(cartItem => cartItem.id !== item.id))
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
                  <Link onClick={(e) => handlerDeletecart(e, item)} />
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