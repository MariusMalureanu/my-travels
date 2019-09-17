import React from "react";


const Travel = props => (
    <div>
        <img className="Image" src={props.image} alt={props.alt}/>
        <p className="Details"> {props.destination} </p>
        <p className="Details"> {props.country} </p>
        <p className="Details"> {props.distance} </p> </div >
);

export default Travel;