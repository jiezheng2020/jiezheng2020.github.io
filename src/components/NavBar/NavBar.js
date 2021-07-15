import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  window.addEventListener("DOMContentLoaded", function () {
    let aboutme = document.querySelector("#about");
    let targetnav = document.querySelector(".navbar");
    let aboutmePos = aboutme.offsetHeight;

    window.addEventListener("scroll", function () {
      let position = window.scrollY;

      if (position >= aboutmePos) {
        targetnav.classList.add("shiftnav");
      } else {
        targetnav.classList.remove("shiftnav");
      }
    });
  });
  return (
    <Navbar expand="lg" fixed="top" bg="custom" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="./resume.pdf">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
