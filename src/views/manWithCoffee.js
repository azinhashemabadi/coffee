import React from "react";
import './manWithCoffee.css';
import { useState } from 'react';
const ManWithCoffee = () => {
    const [state, setState] = useState({
        phone: '',
        time: '',
    });
    //const [state,setState] = React.useState("");
    const handel = (e) =>{
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', state);
    };
    return (
        <div>
            <link href="manWithCoffee.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <div className="flex-manWithCoffee">
                <div>
                <h1 className="text-manWithCoffee">Input your phone</h1><br/>
                <form onSubmit={handleSubmit}>
                    <input type="text"  placeholder="phone number" className="phone" name="phone" value={state.phone} onChange={handel}/><br/><br/>
                    <input type="text"  placeholder="date and time" className="date" name="time" value={state.time} onChange={handel}/><br/><br/>
                    <button className="button-manWithCoffee" >submit</button>
                </form>
                </div>
                <img src={require("./picture/man_with_coffee.png")} width="296" height="319"/>
            </div>
            
        </div>
      );
}
export default ManWithCoffee;