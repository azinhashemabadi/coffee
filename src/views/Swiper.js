import React from "react";
import './Swiper.css'
// import Swiper from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/bundle';
// import SwiperCore, { Pagination } from 'swiper';
// SwiperCore.use([Pagination]);

const Swiper = () =>{
    // const item = [
    //     { id: 1, content: 'Slide 1' },
    //     { id: 2, content: 'Slide 2' },
    //     { id: 3, content: 'Slide 3' },
    //     { id: 4, content: 'Slide 4' },
    // ]
    return(
        <div>
            <div className="all_center">
            <h1 className="Also">Also we have product</h1>
            {/* <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
                {items.map((item) => (
                    <SwiperSlide key={item.id}><div className="swiper-slide-content">{item.content}</div></SwiperSlide>
                ))}
            </Swiper> */}
            <div className="products">
                <div className="product1">
                    <img className="Hot_chocolate" src={require("./picture/Hot_chocolate.png")}></img>
                    <div className="circle1"></div>
                    <h1 className="Best">$65</h1>
                    <h2 className="text">Hot chocolate</h2>
                </div>
                <div className="product2">
                    <img className="coffee_been" src={require("./picture/coffee_been.png")}></img>
                    <div className="circle2"></div>
                    <h1 className="Best">$35</h1>
                    <h2 className="text">Coffee been</h2>
                </div>
                <div className="product3">
                    <img className="shake" src={require("./picture/shake.png")}></img>
                    <div className="circle3"></div>
                    <h1 className="Best">$45</h1>
                    <h2 className="text">Milkshake</h2>
                </div>
                <div className="product4">
                    <img className="cup_" src={require("./picture/cup_.png")}></img>
                    <div className="circle4"></div>
                    <h1 className="Best">$55</h1>
                    <h2 className="text">Cappuccino</h2>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Swiper;