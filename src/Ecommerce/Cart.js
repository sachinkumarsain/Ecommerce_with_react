import React, { useContext, useState } from 'react'
import { ecommerceContext } from './Home'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Cart() {
  const { cart, setcart } = useContext(ecommerceContext)
  const[quantity,setQuantity]=useState(1)
  function handlerDeleteInCard(e, item) {
    e.preventDefault()
    console.log(item)
    setcart(cart.filter(cartItem =>cartItem.id !== item ))

   
  }
  function increaseQuantity(){
    setQuantity(quantity+1)
  }
  function decreseQuantity(){
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }

  return (
    <section className='carts'>
      <h1>select Product</h1>
      <div className='cart'>
        {
          cart.map((item, index) => {
            return (
              <div className='cartitems' key={item.id}>
                <div className='left'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='right'>
                  <h1>{item.title}</h1>
                  <h2><CurrencyRupeeIcon/>{item.price}</h2>
                  <h3><span>Count:-{item.rating.count}</span><span>Rate:-{item.rating.rate}</span></h3>
                  <p>{item.description}</p>
                 <a href=' 'onClick={(e)=>{handlerDeleteInCard(e,item.id)}}>Delete< DeleteIcon /></a>
                 <form>
                  <label>
                    Quantity:-
                  </label>
                  <input placeholder='Enter quantity'  value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input><br/>
                  <button onClick={increaseQuantity()}>IncreaseQuantity:-</button>
                  <button onClick={decreseQuantity()}>DecreseQuantity:-</button>
                  
                 </form>
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