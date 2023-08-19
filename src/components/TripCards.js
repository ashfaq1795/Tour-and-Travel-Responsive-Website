import React from "react";
import classes from "./Trip.module.css";
import TripCard from "./TripCard";

const TripCards = (props) => {
  return (
    <div className={classes.Trip}>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className={classes.TripCards}>
        {props.cardData.map((card, index) => (
          <TripCard
            key={index}
            cimage={card.cimage}
            heading={card.header}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};
export default TripCards;
