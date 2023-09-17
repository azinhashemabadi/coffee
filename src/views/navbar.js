import React from "react";
import './navbar.css';
import { useRef } from 'react';
import './Swiper.js';
import Swiper from './Swiper.js';
import './Journey.js';
import Journey from "./Journey.js";
import './Home.js';
import Home from "./Home.js";
import './waiterMakingCoffee';
import WaiterMakingCoffee from "./waiterMakingCoffee";
const Navbar = () => {
    const swiperRef = useRef(null);
    const scrollToSwiper = () => {
      if (swiperRef.current) {
        swiperRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const journeyRef = useRef(null);
    const scrollToJourney = () => {
      if (swiperRef.current) {
        journeyRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const homeRef = useRef(null);
    const scrollToHome = () => {
      if (swiperRef.current) {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const ReserveRef = useRef(null);
    const scrollToReserve = () => {
      if (swiperRef.current) {
        ReserveRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
        <div>
            <div className="flex">
                <div className="flex-item12" flex-grow="1">  
                    <div className="flex-item1">
                        <img
                        src={require("./picture/logo.png")}
                        width="47px"
                        height="46.988px"
                        alt="Logo"
                        />
                
                    </div>
                    <div className="flex-item2">
                        <h1 className="ECoffee" href="ECoffe" style={{ fontWeight: 700}} color="black" fontSize="unset" >
                        ECoffee
                        </h1>
                    </div>
                </div> 
                <div className="space" flex-grow="3"></div>
                
                <div className="flex-item3456">

                    
                      
                        <div className="flex-item3" flex-grow="2">
                        <a onClick={scrollToHome} className="b">
                        Home
                        </a>
                        <br/>
                    </div>  
                    <div className="flex-item4" flex-grow="2" >
                        <a onClick={scrollToJourney} className="b"  >
                        Journey
                        </a>
                        <br />
                    </div>
                    <div className="flex-item5" flex-grow="2" >  
                        <a onClick={scrollToReserve} className="b" >
                        Reserve
                        </a>
                        <br />
                    </div>
                    <div className="flex-item6" flex-grow="2" > 
                      <div>
                        <a onClick={scrollToSwiper} >Products</a>
                      </div>
                    </div>
                </div>     
            </div>
            <div className="content">
                <div ref={homeRef}>
                  {<Home></Home>}
                </div>
                <div ref={journeyRef}>
                  {<Journey></Journey>}
                </div>
                <div ref={ReserveRef}>
                  {<WaiterMakingCoffee></WaiterMakingCoffee>}
                </div>
                <div ref={swiperRef}>
                  {<Swiper></Swiper>}
                </div>
            </div> 
        </div>
        
    )
}
export default Navbar;