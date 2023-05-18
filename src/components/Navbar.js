import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button, Modal} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { signInAsync, signOutAsync } from '../features/auth/userSlice';

const NavBar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const user  = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const handleOptionClick = (option) => {
    if (option === "Sign In") {
      setShowSignInModal(true);
    } else if (option === "Create Account") {
      setShowSignUpModal(true);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signInAsync(email, password));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

  };

  const handleSignOut = () => {
    dispatch(signOutAsync());
  };

  const handleCancelSignIn = () => {
    setShowSignInModal(false);
    setEmail("");
    setPassword("");
  };

  const handleCancelSignUp = () => {
    setShowSignUpModal(false);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <>
      <Navbar
        bg="transparent"
        variant="dark"
      >
        <Container className="d-flex justify-content-between">
          <Navbar.Brand style={{ color: '#1DB954' }} as={Link} to="/"> Musaic</Navbar.Brand>
          <Nav>
            {user.currentUser ? (
              <>
                <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
                <Nav.Link as={Link} to="/songs">Songs</Nav.Link>
                {/* sign out  */}
                <Nav.Link onClick={() => handleSignOut()}>Sign Out</Nav.Link>
                <Nav.Link>{user.currentUser}</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => handleOptionClick("Sign In")}>
                  Sign In
                </Nav.Link>
                <Nav.Link onClick={() => handleOptionClick("Create Account")}>
                  Create Account
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Modal show={showSignInModal} onHide={handleCancelSignIn} >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignIn}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelSignIn}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignUpModal} onHide={handleCancelSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="displayName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelSignUp}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignUp}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
