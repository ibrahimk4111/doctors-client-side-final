import React from 'react';

//material ui
import { Container, Grid, Typography} from '@mui/material';
import BookingCard from './BookingCard';
import services from './services.json'

function AppointmentGrid({date}){

    return(
        <Container sx={{my: 5}}>
                <Typography variant='h4' color= '#00bed9' sx={{textAlign: 'center'}}>
                    Your appointment date on {date.toDateString()}
                </Typography>
                <Typography variant='h5' sx={{textAlign: 'center', my: 3}}>Please select a service.</Typography>

                <Grid container spacing={2}>
                        { services.map((item, index)=>
                            <BookingCard  key={item.id} bookingCard={item} date={date}/>
                        )}
                </Grid>
        </Container>
    )
}

export default AppointmentGrid;