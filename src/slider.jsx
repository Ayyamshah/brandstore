import React from 'react'
import './slider.css'

const Slider = () => {
  return (
    <>
      <div className='slider'>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/brandstore/images/Sale_D2C_banners_-01.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/brandstore/images/Sale_D2C_banners_-02.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/brandstore/images/Sale_D2C_banners_-04.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/brandstore/images/Sale_D2C_banners_-05.webp" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
       {/* <div className="imgss">
        <img src="public\BRAND_STORY_2000_x_521_px_-2 (1).webp"width={"100%"} alt="" />
       </div> */}
    </>
  )
}

export default Slider