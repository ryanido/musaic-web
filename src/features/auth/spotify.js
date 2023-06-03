// spotify.js

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

// Helper function to make API requests
export const fetchSpotifyAPI = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};

// Get user profile information
export const getUserProfile = async (accessToken) => {
  const url = `${SPOTIFY_API_BASE_URL}/me`;
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return await fetchSpotifyAPI(url, options);
};
