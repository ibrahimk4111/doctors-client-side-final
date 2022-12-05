import React from "react";
import Service from "./Service";

//material ui

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

//images
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'


const services = [
  {
    name: "Teeth",
    img: cavity,
    description:
      "teeth Lorem ipdolor alias corrupti commodi totam earum nostrum! Facilis cumque repellat voluptatibus non qui doloremque odit eius.",
  },
  {
    name: "Fluoride",
    img: fluoride,
    description:
      "teeth Lorem ipsum dolor, sit at eius.",
  },
  {
    name: "Whitening",
    img: whitening,
    description:
      "teeth Lorem ipsum doibus non qui doloremque odit eius.",
  },
];

//main function
const Services = () => {
  return (
    <Container>
    
      <Typography variant='h6' sx={{display: 'flex', justifyContent: 'center', color: '#00bcd4', mt: 5}}>
      Our Services
      </Typography>
      <Typography variant='h5' sx={{display: 'flex', justifyContent: 'center', my: 3}}>
        Services we provide
      </Typography>

      <Grid container spacing={2}>
        { services.map((item, index)=> 
            <Grid item xs={6} md={4} key={index}>
              <Service key={item.name} service={item} />
            </Grid>)}
      </Grid>
  
  </Container>
      
  );
};


export default Services;
