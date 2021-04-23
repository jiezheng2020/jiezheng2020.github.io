import "./Hero.css";
import Typed from "typed.js";
import Image from "react-bootstrap/Image";
import React, { useRef, useEffect } from "react";

export default function Hero() {
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
      <div className="d-flex flex-column ps-2 justify-content-center vh-100 w-100">
        <div className="ps-sm-5">
          <div className="ps-sm-5 hero-content display-1 fw-normal hero-content">
            <p>Hello,</p>
            <p>I'm Kevin</p>
            <div className="display-4">
              <span ref={typeTarget}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
