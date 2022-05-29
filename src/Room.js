import React, { useState } from 'react';
import './Room.css';

const Room = () => {
    let [isLit, setLit] = useState(true);
    let [isTemp, setTemp] = useState(12);
   

    // +(isLit?"lit":"dark")
    return(
       
        <div className={`room ${isLit ? "lit" : "dark"}`}>
                

            <h2>The room is {isLit ? "lit" : "dark"}</h2>
            <h2>the work is testing</h2>
            
            <br />
            
            <button onClick={
                () => {
                    setLit(!isLit);
                }
            }>Toggle Light is on off</button>
            <button onClick={
                () => {
                    setLit(true);
                }
            }>On</button>
            <button onClick={
                () => {
                    setLit(false);
                }
            }>OFF</button>

            <br />
            
            <h2>Temperature in celcius degre:  {isTemp}</h2>
            <br/>
            <button onClick={() => {
                setTemp(++isTemp)
            }}> increase temperature</button>
                        <button onClick={() => {
                setTemp(--isTemp) }}> decrease temperature</button>
       </div>
    )
}
export default Room;

