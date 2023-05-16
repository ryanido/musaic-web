import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/AuthContext";
import { Navbar, Container, Nav, Form, Button, CloseButton } from "react-bootstrap";

const NavBar = () => {
  const { auth, user } = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);

  // Define navbar options based on user authentication status
  const navbarOptions = user
    ? ["Albums", "Songs", user.displayName]
    : ["Sign In", "Create Account"];

  const handleOptionClick = (option) => {
    if (option === "Sign In") {
      setShowSignIn(true);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  const handleCancelSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <Navbar
      bg={!user && window.location.pathname === "/" ? "transparent" : "dark"}
      variant="dark"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand style={{ color: '#1DB954' }} as={Link} to="/"> Musaic</Navbar.Brand>
        <Nav>
          {!showSignIn && navbarOptions.map((option, index) => (
            <Nav.Link
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Nav.Link>
          ))}
        </Nav>
        {showSignIn && (
          <Form onSubmit={handleSignIn} className="d-flex align-items-center">
          <CloseButton onClick={handleCancelSignIn} className="mr-2" />
          <div className="d-flex flex-grow-1">
            <Form.Group controlId="email" className="mr-2 mb-0">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password" className="mr-2 mb-0">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </div>
        </Form>
        



        )}
      </Container>

    </Navbar>
  );
};

export default NavBar;
