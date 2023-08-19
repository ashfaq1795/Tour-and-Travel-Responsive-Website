import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import classes from "../components/AboutUs.module.css";

const about = () => {
  const [abouts] = useState([
    {
      heading: "Our History",
      text:
        "Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence."
    },
    {
      heading: "Our Mission",
      text:
        "Our mission is to touch horizon where our capabilities may successfully meet with the requirements of our clients, that too wit ultimate transparency and cost-effectiveness."
    },
    {
      heading: "Our Vision",
      text:
        "To show the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients."
    }
  ]);
  return (
    <>
      <Navbar />
      <Hero cName="Hero-mid" heroImg={aboutImage} title="About" />
      <div className={classes.Abouts}>
        {abouts.map((about, index) => {
          return (
            <AboutUs heading={about.heading} text={about.text} key={index} />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default about;
