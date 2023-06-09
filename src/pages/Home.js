import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from '../features/albums/Carousel';
import { useGetNewReleasesQuery, useGetTopChartsQuery,useGetUserProfileQuery } from '../features/api/spotifyApiSlice';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const { data: profile } = useGetUserProfileQuery();

  if (!profile) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }



  return (
    <>
      <Container className="d-flex flex-column justify-content-end align-items-center pb-5 mt-5">
        <h2 className="text-white">
          Welcome back <span style={{ color: '#1DB954' }}>{profile.display_name}</span>. Here's what's been spinnin'
        </h2>
      </Container>
      <Container className="d-flex flex-column justify-content-end align-items-center pb-5">
        <Carousel title="New Releases" albumQuery={useGetNewReleasesQuery} />
        <Carousel title="Popular" albumQuery={useGetTopChartsQuery} />
      </Container>
    </>
  );
};

export default Home;

