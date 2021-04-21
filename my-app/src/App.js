import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
