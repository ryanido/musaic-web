import React from "react";

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

export default SpotifyAuth;
