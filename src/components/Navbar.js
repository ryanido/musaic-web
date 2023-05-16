import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/AuthContext";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const { auth, user } = useAuth();

  console.log(auth, user)
  // Define navbar options based on user authentication status
  const navbarOptions = user
    ? ["Albums", "Songs", user.displayName]
    : ["Sign In", "Create Account"];

  return (
    <Navbar bg="transparent" variant="dark" >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand style={{color:'#1DB954'}} as={Link} to="/"> Musaic</Navbar.Brand>
        <Nav>
          {navbarOptions.map((option, index) => (
            <Nav.Link key={index} href={`/${option.toLowerCase().replace(" ", "-")}`}>
              {option}
            </Nav.Link >
          ))}
        </Nav>
      </Container>
    </Navbar>

  );
};

export default NavBar;
