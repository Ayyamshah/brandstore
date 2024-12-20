import React from 'react'
import products from './products'
import Productlist from './productlist'
import './productlist.css'
import Cart from './Cartlist'
import Navbar from './Navbar'
import Slider from './slider'
import ProductProfile from './ProductProfile'
import Shoes from './Shoes'
import Lower from './lower'

const Home = ({addToCart}) => {
  return (
    <>
    <Slider />
    < Productlist products={products} addToCart={addToCart} />
    < Shoes addToCart={addToCart} />
    < Lower addToCart={addToCart}/>
    </>
  )
}

export default Home