import { useState } from 'react'
import './App.css'
import products from './products'
import Productlist from './productlist'
import Cart from './Cartlist'
import Navbar from './Navbar'
import Shoes from './Shoes'
import Lower from './lower'
import AllHoodeds from './AllHoodeds'
import AllLower from './AllLower'
import ShoesProduct from './ShoesProdust'
import Home from './Home'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import Footer from './Footer'
import ProflieButton from './proflieButton'
import FormComponent from './Form'
import Registration from './Form'
import { GlobalStyle } from './styles/globalStyles'
// 
// import DoneMess from './DoneMess'
import DoneMess from './doneMess'



const App = () => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {

        setCart((prevCart) => {
            const itemInCart = prevCart.find((item) => item.id == product.id)
            if (itemInCart) {
                return prevCart.map((item) => item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }

            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }
    const updateQuantity = (id, quantity) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    }
    const upRemoveQuantity = (id, quantity) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    }

    return (

        <>
            <BrowserRouter >


                < Navbar cart={cart} />

                <Routes>
                    < Route path='/brandstore/' element={<Home addToCart={addToCart} />} />
                    <Route path='/brandstore/productlist' element={< Productlist products={products} addToCart={addToCart} />} />
                    <Route path='/brandstore/Shoes' element={< Shoes addToCart={addToCart} />} />
                    < Route path='/brandstore/Lower' element={< Lower addToCart={addToCart} />} />
                    < Route path='/brandstore/cart' element={< Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} upRemoveQuantity={upRemoveQuantity} />} />
                    <Route path='/brandstore/AllLower' element={<AllLower addToCart={addToCart} />} />
                    < Route path='/brandstore/AllHoodeds' element={<AllHoodeds addToCart={addToCart} />} />
                    < Route path='/brandstore/ALLShoes' element={<ShoesProduct addToCart={addToCart} />} />
                    <Route path='/brandstore/ProflieButton' element={<ProflieButton />} />
                    <Route path='/brandstore/cart/form' element={< Registration />} />
                    <Route path='/brandstore/cart/DoneMess' element={< DoneMess />} />
                </Routes>

                < Footer />
            </BrowserRouter>

        </>

    )
}

export default App
