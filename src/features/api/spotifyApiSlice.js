import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const redirectURI = process.env.REACT_APP_REDIRECT_URI;

const baseQuery = fetchBaseQuery({
  baseUrl: SPOTIFY_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => `/me`,
    }),
    getAccessToken: builder.mutation({
      query: (code) => (
        {
          url: 'https://accounts.spotify.com/api/token',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
          },
          body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectURI}`,
        }),
      // set accessToken and refreshToken in the state
      // and return accessToken
    }),
    // Refresh access token
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(clientID + ':' + clientSecret)}`,
        },
      }),
    }),
    getNewReleases: builder.query({
      query: ({ limit = 6, offset = 0 }) => `browse/new-releases?country=US&limit=${limit}&offset=${offset}`,
      transformResponse: (response) => {
        const transformedData = response.albums.items.map((item) => ({
          name: item.name,
          artist: item.artists[0].name,
          cover: item.images[0].url,
          id: item.id,
          // Add other attributes you want to include
        }));
        return transformedData;
      },
      keepUnusedDataFor: 60
    }),

    //Get top songs from US Charts
    getTopCharts: builder.query({
      query: ({ limit = 6, offset = 0 }) => `playlists/37i9dQZEVXbKM896FDX8L1/tracks?limit=${limit}&offset=${offset}`,
      transformResponse: (response) => {
        const transformedData = response.items.map((item) => ({
          name: item.track.name,
          artist: item.track.artists[0].name,
          cover: item.track.album.images[0].url,
          id: item.track.id,
          // Add other attributes you want to include
        }));
        return transformedData;
      },
      keepUnusedDataFor: 60
    }),
    getTopTracks: builder.query({
      query: () => '/me/top/tracks',
      transformResponse: (response) => {
        const transformedData = response.items.map((item) => ({
          name: item.name,
          artist: item.artists[0].name,
          cover: item.album.images[0].url,
          id: item.id,
        }));
        return transformedData;
      },
    }),

    getRecommendations: builder.query({
      query: (seed_tracks) => `/recommendations?seed_tracks=${seed_tracks}`,
      transformResponse: (response) => {
        const transformedData = response.tracks.map((item) => ({
          name: item.name,
          artist: item.artists[0].name,
          cover: item.album.images[0].url,
          id: item.id,
        }));
        return transformedData;
      },
    }),

    getTrack: builder.query({
      query: (id) => `/tracks/${id}`,
      transformResponse: (response) => {
        const transformedData = {
          name: response.name,
          artist: response.artists[0].name,
          cover: response.album.images[0].url,
          id: response.id,
          preview: response.preview_url,
          uri: response.uri,
        };
        return transformedData;
      },
  }),
  }),

});

export const { useGetUserProfileQuery, useGetNewReleasesQuery, useGetTopChartsQuery, useRefreshTokenMutation,
  useGetAccessTokenMutation, useGetRecommendationsQuery, useGetTopTracksQuery,
  useGetTrackQuery
} = spotifyApi;
