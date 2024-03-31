// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda,tesla]=cars;
//console.log(honda,tesla)
const {speedStats:{topSpeed:teslaTopSpeed},coloursByPopularity:[teslaTopColour]}=tesla;

console.log(teslaTopSpeed,teslaTopColour)

const {speedStats:{topSpeed:hondaTopSpeed},coloursByPopularity:[hondaTopColour]}=honda;

console.log(hondaTopSpeed,hondaTopColour);


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);








// const animals = [
//   { name: "cat", sound: "meow" },
//   { name: "dog", sound: "woof" }
// ];

// console.log(animals);
// const [cat,dog]=animals;
// console.log(`${cat.name} and sound :${cat.sound}\n and ${dog.name} and sound ${dog.sound}`);