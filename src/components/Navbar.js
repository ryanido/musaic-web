import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
import { useSelector} from 'react-redux';


const SpotifyAuth = () => {
  const handleLogin = () => {
    const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID; 
    const redirectURI = process.env.REACT_APP_REDIRECT_URI;
    const scope = 'user-read-private user-read-email'; // Add any required scopes

    // Redirect the user to the Spotify authorization URL
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${encodeURIComponent(scope)}&response_type=code`;
  };

 

  return (
    <div>
      <button onClick={handleLogin}>Log in with Spotify</button>
    </div>
  );
};



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
                <Nav.Link as={Link} to="/songs">Songs</Nav.Link>
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
