import React from "react";
import classes from "./Hero.module.css";

const hero = (props) => {
  return (
    <div className={classes[props.cName]}>
      <img src={props.heroImg} alt="heroImg" />
      <div className={classes.HeroText}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a
          href={props.url}
          alt="destination"
          className={classes[props.btnClass]}
        >
          {props.btnText}
        </a>
      </div>
    </div>
  );
};
export default hero;
