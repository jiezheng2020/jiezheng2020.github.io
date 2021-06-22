import "./Hero.css";
import Typed from "typed.js";
import Image from "react-bootstrap/Image";
import React, { useRef, useEffect } from "react";
import headshot from "./headshot.jpg";

function Hero() {
  const typeTarget = useRef(null);
  const options = {
    strings: [
      "I'm a Fullstack Engineer ",
      "I'm a Nature Enthusiast",
      "I'm a Problem Solver",
    ],
    smartBackspace: true,
    typeSpeed: 70,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "|",
  };
  useEffect(() => {
    const typed = new Typed(typeTarget.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <div className="hero-banner">
      <div className="d-flex flex-column pt-5 ps-sm-2 justify-content-center vh-100 w-100">
        <div className="ps-sm-5">
          <div className="d-xl-flex align-items-center ps-sm-5">
            <div className="pb-4 hero-head">
              <Image src={headshot} roundedCircle fluid className="headshot" />
            </div>
            <div className="ps-sm-5 hero-content display-1 fw-normal hero-content flex-row">
              <p>Hello,</p>
              <p>I'm Kevin.</p>
              <div className="display-4">
                <span ref={typeTarget}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
