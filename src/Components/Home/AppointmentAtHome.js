import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

//material ui

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'


export default function Appointment() {
    const AppointmentBg = {
        backgroundImage: `url(${appointment})`
    }
    const descriptionStyle = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"center",
        
    }
  return (
    <Container>
      <Grid container spacing={2} style={AppointmentBg} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, height: 'auto'}}>
            <Grid xs={12} md={5}>
              <img alt='doctor' src={doctor} style={{width: '500px', marginTop: '-100px'}}/>
            </Grid>
        
            <Grid style={descriptionStyle} xs={10} md={6} sx={{p: 5}}>
                <Typography variant='h6' color='#00bcd4'>Appointment</Typography>
                <Typography variant='h3' sx={{my: 2}}>Hello we will meet in next Monday</Typography>
                <Typography variant='p'>Lorem Ipsum is simply dum of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                <Button variant='contained' sx={{width:150, mt: 2, backgroundColor: '#00bcd4', alignItem: 'left'}}>Click Me</Button>
              </Grid>
      </Grid>
    </Container>
  );
}