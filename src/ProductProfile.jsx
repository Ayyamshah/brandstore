import React from 'react'
import Slider from './slider'
import Navbar from './Navbar'
import './ProductProfile.css'
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { GiTShirt } from "react-icons/gi";
import { GiReturnArrow } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { AiTwotoneDollar } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
const ProductProfile = () => {
  return (
    <>
    <Navbar />
    <div className="main bg-wight">
          <div className="container gaap ">
            <div className="row">
                <div className="col-lg-6 product">
                    <img src="public\TFM-24-011-Hdy-480x579.jpg.webp" alt="" />
                    <span className='sale '><a className='py-1 px-3 border rounded' href="">Sale!</a></span>
                </div>
                <div className="col-lg-6 text-start">
                  <h1>&#8377;999</h1>
                  <h5 className='mt-1'>Coler : black</h5>
                 <div className='cricle'>
                 <a href=""><div className='black  border rounded-circle my-2 bg-black' ></div></a>
                 <a href=""><div className='black  border rounded-circle my-2 bg-primary' ></div></a>
                 </div>
                 <h5 className='mt-1'>Size : S</h5>
                 <div className='sazi text-start mt-4 '>
                <a href="" className='border rounded-circle me-3'>S</a>
                <a href="" className='border rounded-circle me-3'>M</a>
                <a href="" className='border rounded-circle me-3'>L</a>
                <a href="" className='border rounded-circle me-3'>XL</a>
                <a href="" className='border rounded-circle me-3'>2XL</a>
                 </div>
                 <div className="cler mt-4">
                  <h6>CLEAR</h6>
                 </div>
                 <hr />
                 <div className="heading-beneer">
                  <img src="public\Heading-10-large.jpg.webp" alt="" />
                 </div>
                 <div className="row mt-4">
                  <div className="col-lg-2">
                    <div className="add border text-center py-2">
                          <h5> <span><AiOutlineMinus /></span><span>1</span><span><GoPlus /></span></h5>
                    </div>

                  </div>
                  <div className="col-lg-5">
                    <div className="bayNav border text-center py-2 text-light bg-dark btn py-2 px-5 ">
                      <h5>BUY NOW</h5>
                    </div>

                  </div>
                  <div className="col-lg-5">
                    <div className="bayNav border text-center py-2  btn py-2 px-5 btn-hover ">
                      <h5>Add to cart</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <div className="bayNav hover border text-center py-2  ">
                     <span className='d-flex justify-content-center btn btn-hover'><GiTShirt /><h6>Size Chart</h6></span> 
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <div className="bayNav hover border text-center py-2  ">
                     <span className='d-flex justify-content-center btn btn-hover'><GiReturnArrow /><h6>Return & Exchange </h6></span> 
                    </div>
                  </div>
                  <div className="mess my-3">
                    <div className='top my-3'>
                    <h6>Free Shipping on orders worth ₹599 or more!</h6>
                    </div>
                    <div className='base mb-5'>
                      <h6 className='my-2'><FaRecycle /> 7 Days Return</h6>
                      <h6 className='my-2'><AiTwotoneDollar /> Cash On Delivery</h6>
                      <h6 className='my-2'><FaTruckMoving /> Dispatched in 24 hours</h6>
                    </div>
                    <hr />
                    <h2>Reviews (0) <span className='text-right'><MdAdd /></span> </h2>
                    <hr />


                  </div>
                  
                 </div>
                </div>
            </div>
          </div>
         
    </div>
    </>
  )
}

export default ProductProfile