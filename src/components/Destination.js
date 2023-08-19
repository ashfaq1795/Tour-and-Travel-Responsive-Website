import React from "react";
import classes from "./Destination.module.css";
import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain5 from "../assets/5.jpg";
import Mountain8 from "../assets/8.jpg";

const Destination = (props) => {
  return (
    <div className={classes.Destination}>
      <h1>Popular Destination</h1>
      <p> Tours give you the opportunity to see a lot, within a time frame. </p>
      <DestinationData
        cName="FirstDes"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular view seen from Tagaytay Ridge. Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
        image1={Mountain1}
        image2={Mountain2}
      />
      <DestinationData
        cName="FirstDesReverse"
        heading="Mt. Daguldul, Batangas"
        text="if you are looking for a hike that's is a little more challanging but still good for beginner mountaineer, checkout Mt. daguldul in San Juan, Batangas. You will start your hike from that beach and pass through tropical forest, different rock formations, and small streams. There is a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you have made it back down, head stright to the beach for a refreshing, well-deserved swim."
        image1={Mountain5}
        image2={Mountain8}
      />
    </div>
  );
};
export default Destination;
