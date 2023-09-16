import React from "react";
import './Journey.css'
const Journey = () =>{
    return(
        <div>
            <h1 className="Welcome" style={{ fontWeight: 700}} color="black">Start to have journey in your coffee</h1>
            <div className="flex-journey">
                
                <div className="item1">
                    <img className="latte" src={require("./picture/latte.png")}></img>
                    <h1 className="Best">Best Coffee</h1>
                    <p1>Drink the best<br/> coffe you have <br/>ever drunk.</p1>
                </div>
                <div className="item2">
                    <img className="coffee_shop" src={require("./picture/coffee_shop.png")}></img>
                    <h1 className="Beautiful">Beautiful view</h1>
                    <p1>You can sit and<br/> talk with your<br/> friends and enjoy<br/> the environment.</p1>
                </div>
                <div className="item3">
                    <img className="percentage" src={require("./picture/percentage.png")}></img>
                    <h1 className="offering">offering</h1>
                    <p1>Buy the best latte<br/> with the best<br/> cust.</p1>
                </div>
            </div>
        </div>
    )
}
export default Journey;