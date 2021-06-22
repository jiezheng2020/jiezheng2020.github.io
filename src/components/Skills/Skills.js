import React from "react";
import "./Skills.css";
import JS from "./JavaScript.png";
import node from "./Node.png";
import psql from "./PostgreSQL.png";
import rct from "./React.png";
import rdux from "./Redux.png";
import python from "./Python.png";

export default function Skills() {
  return (
    <div id="skills">
      <h2 style={{ fontSize: "35px" }}>Skills</h2>
      <div className="skills-row">
        <div className="d-flex flex-column align-items-center">
          <img className="skill-logo" src={python} />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            Python
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="skill-logo" src={JS} />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            JavaScript
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="skill-logo" src={rct} />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            React
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="skill-logo" src={rdux} />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            Redux
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="skill-logo" src={node} />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            Node
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="skill-logo" src={psql} />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            PostgreSQL
          </div>
        </div>
      </div>
    </div>
  );
}
