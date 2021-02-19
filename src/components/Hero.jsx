import React from "react";
import bg from "../assets/img/foto.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={bg} alt="img hero" />

        <div className="text-hero">
          <h1>
            the best <br />
            photographers
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
