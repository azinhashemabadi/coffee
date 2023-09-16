import React from "react";
import './footer.css';
const Footer = () => {
    return (
        <div>
            <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <i className="fa-solid fa-arrow-up icon"></i>
          <link href="footer.css" rel="stylesheet" />
    
          <div className="flex">
            <div className="flex_item1">
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
              <p className="text">Dark like your coffee<br />White like your sugar</p>
            </div>
            <div className="flex_item2">
              <h1 style={{ fontSize: "16px" }} id="a">
                Our Services
              </h1>
              <a href="pricing" id="b">
                Pricing
              </a>
              <br />
              <a href="discount" id="b">
                Discount
              </a>
              <br />
              <a href="shipping-mode" id="b">
                Shipping mode
              </a>
            </div>
            <div className="flex_item3">
              <h1 style={{ fontSize: "16px" }} id="a">
                Support
              </h1>
              <a href="FAQs" id="b">
                FAQs
              </a>
              <br />
              <a href="support-center" id="b">
                Support center
              </a>
              <br />
              <a href="contact-us" id="b">
                Contact Us
              </a>
            </div>
            <div className="flex_item4">
              <h1 id="a">Available On</h1>
              <img
                src={require("./picture/aviable1.png")}
                width="116"
                height="36"
                alt="Available 1"
              />
              <br />
              <br />
              <img
                src={require("./picture/aviable2.png")}
                width="116"
                height="36"
                alt="Available 2"
              />
            </div>
          </div>
          </div>
        </div>
      );
}

export default Footer;