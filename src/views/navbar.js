import React from "react";
import './navbar.css';
import { useEffect } from 'react';
const Navbar = () => {
    useEffect(() => {
        const handleLinkClick = (event) => {
          event.preventDefault();
          const targetId = event.target.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
    
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        };
    
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
          link.addEventListener('click', handleLinkClick);
        });
    
        return () => {
          // Remove event listeners when component unmounts
          links.forEach((link) => {
            link.removeEventListener('click', handleLinkClick);
          });
        };
      }, []);
    // const [FontColor,setFontColor] = React.useState(false)
    // const handleClick1 = () => {
    //     setFontColor(!FontColor)
    // }
    // const handleClick2 = () => {
    //     setFontColor(!FontColor)
    // }
    // const handleClick3 = () => {
    //     setFontColor(!FontColor)
    // }
    // const handleClick4 = () => {
    //     setFontColor(!FontColor)
    // }
    // const goTo = () => {

    // }
    // const [currentComponent, setCurrentComponent] = useState(null);
    // const loadComponent = (componentName) => {
    //     import(`./${componentName}.js`)
    //       .then((module) => setCurrentComponent(module.default))
    //   };
    // const linkStyle ={
    //     color: FontColor ? "#CF9A72" : "black",
    //     textDecoration: 'none',
    //     cursor: 'pointer',
    // }
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
                        <li><a href="#Home" className="b">
                        Home
                        </a></li>
                        <br/>
                    </div>  
                    <div className="flex-item4" flex-grow="2" >
                        <li><a href="#Journey" className="b"  >
                        Journey
                        </a></li>
                        <br />
                    </div>
                    <div className="flex-item5" flex-grow="2" >  
                        <li><a href="#waiterMakingCoffee" className="b" >
                        Reserve
                        </a></li>
                        <br />
                    </div>
                    <div className="flex-item6" flex-grow="2" >  
                        <li><a href="#Swiper" className="b">
                        Products
                        </a></li>
                    </div>
                    
               
                </div>     
            </div>
        </div>
        
    )
}
export default Navbar