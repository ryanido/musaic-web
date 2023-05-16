import React from 'react'
import NavBar from '../components/Navbar'
import { Container } from 'react-bootstrap'
import { Carousel } from '../components/Carousel'

const Home = () => {
  return (
    <>
      <NavBar />
      <Container className='d-flex flex-column justify-content-end align-items-center pb-5 mt-5'>
        <h2 className='text-white'>Welcome back user. Here's what your friends have been spinnin'</h2>
          <Carousel title={"Popular"} />
          <Carousel title={"New Releases"} />
          <Carousel title={"Recently Played"} />
      </Container>
    </>
  )
}

export default Home