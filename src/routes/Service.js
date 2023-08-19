import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import TripCards from "../components/TripCards";
import { instance1 } from "../axios";
import cimage1 from "../assets/5.jpg";
import cimage2 from "../assets/8.jpg";
import cimage3 from "../assets/6.jpg";
import withErrorHandler from "../hoc/withErrorHandler";

const service = () => {
  const [state, setState] = useState([]);
  const [localData] = useState([
    {
      cimage: cimage1,
      header: "Trip in Indonesia"
    },
    {
      cimage: cimage2,
      header: "Trip in Malaysia"
    },
    {
      cimage: cimage3,
      header: "Trip in France"
    }
  ]);

  useEffect(() => {
    instance1
      .get("/posts")
      .then((response) => {
        const data = response.data.slice(0, 3);
        const updatedData = data.map((element, index) => ({
          cimage: localData[index].cimage,
          heading: localData[index].header,
          text: element.body
        }));
        setState(updatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Hero cName="Hero-mid" heroImg={aboutImage} title="Service" />
      <TripCards cardData={state} />
      <Footer />
    </>
  );
};

export default withErrorHandler(service, instance1);
