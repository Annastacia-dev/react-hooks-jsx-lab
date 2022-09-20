import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
          <h2>About Me</h2>
          <p>
          I describe myself as a passionate developer who loves coding, 
          open source, and the web platform.<br />Aside from my job,
          I like to create and contribute to open source projects.<br /> 
          That helps me to learn a ton of new stuff, grow as a developer 
          and support other open source projects. 
          </p>
          <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
