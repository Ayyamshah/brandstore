import React from 'react'
import { routeProduct } from './products'
import { IoAdd } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import RatingStars from './ratingStars';

const AllHoodeds = ({ addToCart }) => {
    return (
        <>

            <div className="Productlist1 my-5">
                <div className="banaeer  mb-4">
                    <img src="/brandstore/images/Desktop_-_Collection_Banners-10.webp" alt="img" />
                </div>
                <div className=' container product-lis  '>

                    <div className="row">

                        {routeProduct.map((item) => (
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
                                    <div className="row">
                                        <div className="col-lg-6"><a href="#" onClick={() => addToCart(item)} className="btn btn-success px-4  mx-">AddCart</a></div>
                                        <div className="col-lg-6"><a href="#" onClick={() => addToCart(item)} className="btn btn-danger px-3  mx-">Buy Now</a></div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AllHoodeds