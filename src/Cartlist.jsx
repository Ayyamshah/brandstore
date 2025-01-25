import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = ({cart ,removeFromCart , updateQuantity ,upRemoveQuantity}) => {
  console.log(cart);
   const totlePrice = cart.reduce((totle , item) => totle + item.price * item.quantity, 0  )
  return (
    
    <>
    <div className="cart-wrapper">
    <div  className="cart  mt-5 text-center">
        <h1>Shopping Cart </h1>
        <div className='no_cart'>
        {cart.length == 0 ? <h3 className='text-danger'>No Cart Here Please Add A Item </h3> : null}
        </div>
       {cart.map ((item) => (
         <div key={item.id} className="cart-itme">
          <div className="cart_item_name">
         <h4>{item.name}</h4>
          </div>
          <div className="cart_quan">
         <p>&#8377;{item.price}</p>
          </div>
         <p>{item.quantity}</p>
          <div className="cart_btn">
         <button className='mx-1' onClick={() =>updateQuantity(item.id ,item.quantity + 1 )}>+</button>
         <button className='mx-1' onClick={()=> upRemoveQuantity(item.id ,item.quantity - 1)}>-</button>
         <button className='mx-1 bg-danger' onClick={()=> removeFromCart(item.id)}><FaTrash /></button>
          </div>
     </div>
       ))}
        <h3 className='total'>Total : {totlePrice}</h3>
        <Link to={"form"}>
        
        <button className='mt-3  btn w-100 bg-success hover-text-wieth'>Checkout</button>
        </Link>
    </div>

    </div>
    </>
  )
}

export default Cart