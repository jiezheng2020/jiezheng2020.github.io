import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="skills">
      <h2 style={{ fontSize: "35px" }}>Skills</h2>
      <div className="skills-row">
        <div className="d-flex flex-column align-items-center">
          <img
            className="skill-logo"
            src="http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
          />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            Python
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img
            className="skill-logo"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
          />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            JavaScript
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img
            className="skill-logo"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            React
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img
            className="skill-logo"
            src="http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
          />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            Redux
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img
            className="skill-logo"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png"
          />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            Node
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img
            className="skill-logo"
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-256.png"
          />
          <div className="mt-3" style={{ fontSize: "25px" }}>
            PostgreSQL
          </div>
        </div>
      </div>
    </div>
  );
}
