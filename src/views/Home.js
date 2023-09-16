import React from "react";
import './Home.css'
const Home = () => {
    return(
        <div>
            <div className="flex-item12-coffee_machine" >  
                    <div className="flex-item1">
                        <img className="coffee_machine"
                        src={require("./picture/coffee_machine.png")}
                        alt="Logo"
                        />
                
                    </div>
                    <div className="flex-item2">
                        <h1 className="Welcome" style={{ fontWeight: 700}} color="black" >
                        Welcome to our coffee shop
                        </h1>
                        <h2 className="text-coffee_machine">You can order every coffee you want <br/>and we are here to meet your needs</h2><br/>
                        <button className="button-manWithCoffee">Get Started</button>
                    </div>
                    
                </div> 
        </div>
    )
}
export default Home;