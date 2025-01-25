import React from 'react'
import products from './products'
import { IoAdd } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import RatingStars from './ratingStars';
import { Link } from 'react-router-dom';

const Dezain = ({ products, addToCart }) => {
    return (
        <>

            <div className=' container product-lis '>
                <div className="row">

                    {products.map((item) => (
                        <div key={item.id} className="card col-md-4" >
                            <img src={item.img} className="card-img-top p-2 px-3" alt="..." />
                            <div className="icons">
                                 <span onClick={() => addToCart(item)} className='mx-5 p-2 btn'><IoAdd /></span>
                                <span className='p-2'><CiLink /></span>
                                </div>
                            <div className="card-body text-center">
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-text bolder fs-4">&#8377;{item.price}/-</p>
                                <p>
                                    "Stay cozy and stylish with our premium hoodie."
                                    "Soft, comfortable, and built to last  for all-day comfort."</p>
                                <span>< RatingStars /></span>
                                <hr />
                                <a href="#" onClick={() => addToCart(item)} className="btn btn-success px-4  mx-3">Add To Cart</a>
                                <a href="#" onClick={() => addToCart(item)} className="btn btn-danger px-4  mx-3">Buy Now</a>
                            </div>
                        </div>
                    ))}
                    <div className="vieewbutton">
                        <Link to={'brandstore/AllHoodeds'}><button className='text-center vieew'>View all</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dezain