import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
import { useSelector} from 'react-redux';
import SpotifyAuth from '../features/auth/SpotifyAuth';



const NavBar = () => {
 
  const user = useSelector((state) => state.user.accessToken);

  return (
    <>
      <Navbar bg="transparent" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand style={{ color: '#1DB954' }} as={Link} to="/"> Musaic</Navbar.Brand>
          <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
                {/* <Nav.Link as={Link} to="/songs">Songs</Nav.Link> */}
                {/* sign out  */}
              </>
            ) : (
              <>
                {/* <Nav.Link onClick={() => handleOptionClick("Sign In")}>
                  Sign In
                </Nav.Link> */}
                <SpotifyAuth />
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

    </>
  );
};

export default NavBar;
