import React from 'react'
import Services from '../ServiceCom/Services';
import AppointmentAtHome from './AppointmentAtHome';
import DentalCare from './DentalCare';
import Reviews from '../Review/Reviews';
import Container from '@mui/material/Container'



const Home =() => {
    return(
        <Container>
          <Services />
          <DentalCare  />
          <AppointmentAtHome />
          <Reviews />
        </Container>
    )
}

export default Home;