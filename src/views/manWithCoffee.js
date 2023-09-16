import React from "react";
import './manWithCoffee.css';
const ManWithCoffee = () => {
    return (
        <div>
            <div>
            <link href="manWithCoffee.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <div className="flex-manWithCoffee">
                <div>
                <h1 className="text-manWithCoffee">Input your phone</h1><br/>
                <input value="Phone number" className="phone"/><br/><br/>
                <input value="Date and time" className="date"/><br/><br/>
                <button className="button-manWithCoffee">send</button>
                </div>
                <img src={require("./picture/man_with_coffee.png")} width="296" height="319"/>
            </div>
            </div>
        </div>
      );
}
export default ManWithCoffee;