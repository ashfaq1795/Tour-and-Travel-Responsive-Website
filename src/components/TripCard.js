import React from "react";
import classes from "./Trip.module.css";

const TripCard = (props) => {
  return (
    <div className={classes.TripCard}>
      <div className={classes.Timage}>
        <img src={props.cimage} alt="TripPic" />
      </div>
      <h4>{props.heading} </h4>
      <p> {props.text}</p>
    </div>
  );
};
export default TripCard;
