import React from "react";
import classes from "./AboutUs.module.css";

const aboutUs = (props) => {
  return (
    <div className={classes.About}>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
  );
};
export default aboutUs;
