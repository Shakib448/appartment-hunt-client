import React from "react";
import logo from "../../../logos/Logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.sass";

const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className="mainNav"
        variant="light"
      >
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="100"
                className="d-inline-block align-top mt-2"
                alt="Apartment Hunt logo"
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto font-weight-bold text-white ">
              <NavLink
                className="mr-4 mb-3 mt-2 text-dark "
                activeClassName="mainNav__activeHover"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                to="/"
                className="mr-4 mb-3 mt-2 text-dark "
                style={{ textDecoration: "none" }}
              >
                About
              </NavLink>
              <NavLink
                to="/"
                className="mr-4 mb-3 mt-2 text-dark "
                style={{ textDecoration: "none" }}
              >
                Service
              </NavLink>
              <NavLink
                to="/"
                className="mr-4 mb-3 mt-2 text-dark "
                style={{ textDecoration: "none" }}
              >
                Concerns
              </NavLink>
              <NavLink
                to="/"
                className="mr-4 mb-3 mt-2 text-dark "
                style={{ textDecoration: "none" }}
              >
                Event
              </NavLink>
              <NavLink
                to="/"
                className="mr-4 mb-3 mt-2 text-dark "
                style={{ textDecoration: "none" }}
              >
                Contact
              </NavLink>
              <NavLink to="/google-sign-in">
                <Button className="btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn">
                  Log In
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
