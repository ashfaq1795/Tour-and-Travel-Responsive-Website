import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeImage from "../assets/12.jpg";
import Destination from "../components/Destination";
import TripCards from "../components/TripCards";
import Footer from "../components/Footer";
import cimage1 from "../assets/5.jpg";
import cimage2 from "../assets/8.jpg";
import cimage3 from "../assets/6.jpg";

const home = () => {
  const [state] = useState([
    {
      cimage: cimage1,
      header: "Trip in Indonesia",
      text:
        "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between Indian and Pacific. It consist of over 17,000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea."
    },
    {
      cimage: cimage2,
      header: "Trip in Malaysia",
      text:
        "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the islan of Borneo. it's known for its breachs, rainforests and max of Malay, Chinese, Indian and European cultural influneces."
    },
    {
      cimage: cimage3,
      header: "Trip in France",
      text:
        "France, in western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffle Tower."
    }
  ]);

  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={homeImage}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnClass="show"
        url="/"
        btnText="Plan Travel"
      />
      <Destination />
      <TripCards cardData={state} />
      <Footer />
    </>
  );
};
export default home;
