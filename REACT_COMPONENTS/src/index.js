import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return <div>

  <h2>{props.name}</h2>
    <img
      src={props.image}
      alt="avatar_img"
    />
    <p>{props.contact}</p>
    <p>{props.mail}</p>
    </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" contact="+123 456 789" mail="b@beyonce.com"/>

    <Card name="Jack Bauer" image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" contact="354636346" mail="jack@nowhere.com"/>

    <Card name="Chuck Norris" image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" contact="95435345" mail="gmail@chucknorris.com"/>

  </div>,
  document.getElementById("root")
);
