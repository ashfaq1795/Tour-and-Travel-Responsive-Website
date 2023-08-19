import React, { Component } from "react";
import classes from "./Destination.module.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={classes[this.props.cName]}>
        <div className={classes.DesText}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className={classes.Image}>
          <img src={this.props.image1} alt="img" />
          <img src={this.props.image2} alt="img" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
