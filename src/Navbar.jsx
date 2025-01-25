

import React from 'react'
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BsChevronDoubleRight } from "react-icons/bs";
import Cart from './Cartlist';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ cart }) => {
  return (
    <>
      <nav className="navbar w-100 navbar-expand-lg ">

        <a className="navbar-brand ms-5" href="#"><img src="/brandstore/images/shopping-cart.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="text-decoration-none text-dark ms-5 fs-5 nav-link active" to={'/brandstore/'}>Home</Link>
            </li>

            <li className="nav-item lll dropdown   w-100">
              <a className="nav-link fs-5 dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu ">
                <li> <Link className='text-decoration-none text-dark ms-5 fs-5' to={"brandstore/Shoes"}>Shoes</Link></li>
                <li> <Link className='text-decoration-none text-dark ms-5 fs-5 ' to={"brandstore/Lower"}>Lower</Link></li>
                <li> <Link className='text-decoration-none text-dark ms-5 fs-5 ' to={"brandstore/productlist"}>Hodded</Link></li>
              </ul>
            </li>
          </ul>
          <ul className='d-flex main me-5' style={{ listStyle: "none" }}>
            <li className='ms-5 fs-3  '>
              <Link to={"brandstore/cart"} className='text-black '>< FaCartShopping className='position-relative' />

                <span class="position-absolute fs-6 start-70 translate-middle  badge rounded-pill bg-danger">
                  {cart.length}
                  <span class="visually-hidden">unread messages</span>
                </span>


              </Link>

            </li>

            <li className='ms-5 fs-3 '><Link to={'/brandstore/ProflieButton'} className='text-black' >< CgProfile /></Link></li>
          </ul>

        </div>

      </nav>
    </>
  )
}

export default Navbar