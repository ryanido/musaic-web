import React from 'react'
import { Container } from 'react-bootstrap'
import BACKDROP from '../assets/backdrop.png'

const HomeSO = () => (
  <div
    className='home-container'
    style={{
      backgroundImage: `url(${BACKDROP})`,
      height: '100vh',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Container className='d-flex flex-column justify-content-end align-items-center pb-5 mt-5'>
      <h1 className='home-title text-white font-weight-bold'>Musaic</h1>
      <h2 className='home-subtitle text-white-50 mt-'>Your music, your way</h2>
    </Container>
  </div>
)

export default HomeSO

