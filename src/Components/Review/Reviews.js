import React from "react";
import Review from "./Review";

//material ui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

//images
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewHead from "./ReviewHead";



const reviews = [
  {
    name: "Teeth",
    img: people1,
    description:"teeth Lorem ipdolor alias corrupti commodi totam earum nostrum! Facilis cumque repellat voluptatibus non qui doloremque odit eius.",
  },
  {
    name: "Fluoride",
    img: people2,
    description:"teeth Lorem ipsum dolor, sit at   Lorem ipdolor alias corrupti commodi totam earum nostrum! Facilis cumque repellat voluptatibus eius.",
  },
  {
    name: "Whitening",
    img: people3,
    description:"teeth Lorem ipsum doibus non qui doloremque odit eius.",
  },
];

const Reviews = () => {
  
  return (     
    <Container>
        <ReviewHead></ReviewHead>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          { reviews.map((item, index)=> 
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Review key={item.name} review={item} />
            </Grid>)
          }
        </Grid>
      </Container>
  );
};

export default Reviews;
