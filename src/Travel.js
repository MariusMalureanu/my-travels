import React from "react";

const Travel = props => (
    <div>
        <img src={props.image} />
        <p> {props.destination} </p>
        <p> {props.country} </p>
        <p> {props.distance} </p> </div >
);

export default Travel;