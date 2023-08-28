import reactLogo from "../assets/react.svg";

import Container from "react-bootstrap/Container";
import {Nav, Navbar, NavDropdown, Image} from 'react-bootstrap';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Image from 'react-bootstrap/Image';
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={reactLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-success" as={Link} to="/about">About</Nav.Link>
              {/* <Nav.Link href="about">About</Nav.Link> */}
              <Nav.Link className="text-warning" as={Link} to="/mission">Mission</Nav.Link>
              {/* <Nav.Link href="mission">Mission</Nav.Link> */}
              <Nav.Link className="text-primary" as={Link} to="/signin">Signin</Nav.Link>
              {/* <Nav.Link href="signin">Signin</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
