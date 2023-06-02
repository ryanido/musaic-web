import React from 'react'
import NavBar from '../components/Navbar'
import { Container } from 'react-bootstrap'
import { Carousel } from '../features/albums/Carousel'
import { useGetTopTracksQuery } from '../features/api/apiSlice'
import { Spinner } from 'react-bootstrap'

const Home = () => {
  const { data: topTracks, isLoading, isError } = useGetTopTracksQuery()

  let carouselContent;

  if (isLoading) {
    // Display a loading spinner while the data is being fetched
    carouselContent = (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  } else if (isError) {
    // Display an error message if there was an error fetching the data
    carouselContent = (
      <div className="text-center text-danger">Error loading top tracks</div>
    );
  } else if (topTracks) {
    console.log(topTracks['tracks']);
    carouselContent = <Carousel title="Popular" tracks={topTracks['tracks']} />;
  }

  return (
    <>
      <NavBar />
      <Container className="d-flex flex-column justify-content-end align-items-center pb-5 mt-5">
        <h2 className="text-white">Welcome back user. Here's what your friends have been spinnin'</h2>
        {carouselContent}
      </Container>
    </>
  );
}

export default Home;
