import React, { Component } from "react";
import { Navbar, Nav, } from "react-bootstrap";
import { GiGuitarBassHead } from "react-icons/gi";
import { ButtonC } from "./Elements";
import { animateScroll as scroll, Link } from "react-scroll";


export class Navigation extends Component {
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <>
        <Navbar
          fixed="top"
          variant="dark"
          expand="lg"
          id="navigation"
          collapseOnSelect
        >
          <Navbar.Brand>
            <Link
              to="navigation"
              onClick={toggleHome}
              style={{ cursor: "pointer" }}
            >
              <GiGuitarBassHead
                to="navigation"
                onClick={toggleHome}
                style={{ color: "#b90abf" }}
              />{" "}
              dbass-ED
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto text-center">
              <Nav.Link
                eventKey="1"
                as={Link}
                to="about"
                spy={true}
                smooth={true}
                duration={700}
              >
                About
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                as={Link}
                to="discover"
                spy={true}
                smooth={true}
                duration={700}
              >
                Discover
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                as={Link}
                to="services"
                spy={true}
                smooth={true}
                offset={30}
                duration={700}
              >
                Services
              </Nav.Link>
            </Nav>
            <Nav.Link
              to="sign"
              as={Link}
              eventKey="4"
              spy={true}
              smooth={true}
              duration={700}
              style={{ borderBottom: "none" }}
            >
              <ButtonC>Sign Up</ButtonC>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
