import React from "react";
import classes from "./Footer.module.css";
import { connect } from "react-redux";

const footer = (props) => {
  const mediaLinks = [];
  for (let key in props.allMedia) {
    mediaLinks.push({
      id: key,
      media: props.allMedia[key]
    });
  }
  return (
    <div className={classes.Footer}>
      <div className={classes.top}>
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          {mediaLinks.map((mediaLink) => (
            <a href={mediaLink.media.link} key={mediaLink.id}>
              <i className={mediaLink.media.cName}></i>
            </a>
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        {props.ftrContents.map((ftrContent, index) => (
          <div key={index}>
            <h4>{ftrContent.title}</h4>
            {ftrContent.links.map((link, linkIndex) => (
              <a href="/" key={linkIndex}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className={classes.signature}>
        <hr />
        <p>&#169; 2023 | Designed and developed by Engineer Ashfaq</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allMedia: state.fReducer.socialMedia,
    ftrContents: state.fReducer.footerContents
  };
};

export default connect(mapStateToProps)(footer);
