import React from "react";
import Travel from "./Travel";
import Warsaw from "./Warsaw.jpg"
import Paris from "./Paris.jpg"
import Wien from "./Wien.jpg"
import New_York from "./New_York.jpg"
import Tokyo from "./Tokyo.jpg"

// src/Quotes.js
const travels = [
  {
    destination:"New York",
    country: "USA",
    distance: "7600 km",
    image: New_York
  },
  {
    destination:"Tokyo",
    country: "Japan",
    distance: "9000 km",
    image: Tokyo
  },
  {
    destination:"Paris",
    country: "France",
    distance: "1900 km",
    image: Paris
  },
  {
    destination:"Wien",
    country: "Austria",
    distance: "850 km",
    image: Wien
   },
  {
    destination:"Warsaw",
    country: "Poland",
    distance: "1000 km",
    image:(Warsaw)
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel {...travel} />
    ))}
  </div>
);

export default Travels;