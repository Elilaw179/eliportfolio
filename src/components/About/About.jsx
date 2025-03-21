import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import sirlaw from "../../assets/sirlaw.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={sirlaw} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer from Akwa-Ibom, Nigeria with 2 years of
              experience in multiple companies like Shepherd Porch, Midlan Tech
              and Flourishers
            </p>
            <p>
              I am a frontend developer from Akwa-Ibom, Nigeria with 2 years of
              experience in multiple companies like Shepherd Porch, Midlan Tech
              and Flourishers
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML &CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
