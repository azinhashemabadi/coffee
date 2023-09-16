import React from "react";
import './manWithCoffee.js';
import './footer.js';
import './waiterMakingCoffee.js';
import './navbar.js';
import './Home.js';
import './Journey.js';
import './Swiper.js';
import Swiper from './Swiper.js';
import Journey from "./Journey.js";
import Home from "./Home.js";
import Navbar from "./navbar.js";
import WaiterMakingCoffee from "./waiterMakingCoffee.js";
import Footer from "./footer.js";
import ManWithCoffee from "./manWithCoffee.js";
const Main = () => {
  return (
    <div>
        <div>
          <Navbar>
          
          </Navbar>
        </div>
        
        <div>
          <Home>
          </Home>
        </div>
        <div>
          <Journey>
          </Journey>
        </div>
        <div>
          <WaiterMakingCoffee>
          </WaiterMakingCoffee>
        </div>
        <div>
          <Swiper>
          </Swiper>
        </div>
        <div>
          <ManWithCoffee>
          </ManWithCoffee>
        </div>
        <br/>
        <br/>
        <div>
          <Footer>
          </Footer>
        </div>
        <br/>
        <br/>
        
        
      
    </div>
  );
};

export default Main;