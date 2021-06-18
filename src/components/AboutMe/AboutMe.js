import "./AboutMe.css";
import React from "react";

export default function AboutMe() {
  return (
    <div id="about" className="aboutme-container">
      <h2>About Me</h2>
      <div className="about-blurb">
        I graduated from Northwestern University in 2020 with a bachelors in
        Mechanical Engineering. During my time there, I realized that my
        passions didn't align with what I was learning. I was always drawn to
        the design and problem solving aspect of MechE more so than the theory
        behind it. I believe that the tech industry is the future and can impact
        people's lives in ways the traditional manufacturing industry cannot,
        and I hope to become someone that can do that through software and
        technology.
      </div>
    </div>
  );
}
