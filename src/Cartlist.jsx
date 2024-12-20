import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = ({cart ,removeFromCart , updateQuantity ,upRemoveQuantity}) => {
  console.log(cart);
   const totlePrice = cart.reduce((totle , item) => totle + item.price * item.quantity, 0  )
  return (
    
    <>
    <div className="cart-wrapper">
    <div  className="cart  mt-5 text-center">
        <h1>Shopping Cart </h1>
        {cart.length == 0 ? <h3>No Cart </h3> : null}
       {cart.map ((item) => (
         <div key={item.id} className="cart-itme">
         <h4>{item.name}</h4>
         <p>&#8377;{item.price}/-</p>
         <p>{item.quantity}</p>
         <button onClick={() =>updateQuantity(item.id ,item.quantity + 1 )}>+</button>
         <button onClick={()=> upRemoveQuantity(item.id ,item.quantity - 1)}>-</button>
         <button onClick={()=> removeFromCart(item.id)}>Remove</button>
     </div>
       ))}
        <h3>Totle : {totlePrice}</h3>
        <Link to={"form"}>
        
        <button className='mt-3  btn w-100 bg-success hover-text-wieth'>Checkout</button>
        </Link>
    </div>

    </div>
    </>
  )
}

export default Cart