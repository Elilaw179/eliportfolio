import React from "react";
import "./Hero.css";
import eli from "../../assets/eli.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {   
  return (
    <div id="home" className="hero">
      <img src={eli} alt="" />
      <h1><span>I'm Elisha Sunday,</span> frontend developer based in Nigeria</h1>
      <p>
        I am a frontend developer from Akwa-Ibom, Nigeria with many years of
        experience in multiple companies like Shepherd Porch, Midlan Tech and
        Flourishers
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
export default Hero;
