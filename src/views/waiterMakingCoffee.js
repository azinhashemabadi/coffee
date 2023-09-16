import React from "react";
import './waiterMakingCoffee.css';
const WaiterMakingCoffee = () => {
    return (
        <div>
            <link rel="stylesheet" href="waiterMakingCoffee.css"/>
            <div class="flex-waiterMakingCoffee">
            <div>
                <h1 class="title-waiterMakingCoffee">Reserve your table now</h1>
                <div class="b" ><p1 id="text-waiterMakingCoffee">You can reserve your table every time with everyone you<br/> want, come here we are waiting</p1><br/><br/></div>
                <div class="a">
                    <button class="button-waiterMakingCoffee">Reserve</button>
                </div>
            </div>
            <img src={require("./picture/waiter-making-coffee-3462715-2903816.png")} width="227" height="281"/>
            </div>
        </div>
      );
}
export default WaiterMakingCoffee;