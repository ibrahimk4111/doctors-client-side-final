import React from 'react'
import quote from '../../assets/icons/quote.svg';

//material ui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function ReviewHead(){
    return(
        <Container>
            <Grid container spacing={2} sx={{flexGrow: 1, mt: 5}}>
        
                <Grid xs={6} md={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography variant='h6' color='#00bcd4'>Testimonial</Typography>
                    <Typography variant='h5' sx={{my: 2}}>What our patient says</Typography>   
                </Grid>

                <Grid xs={6} md={6} sx={{display: 'flex', justifyContent: 'right' }}>
                    <img alt='quote' src={quote} style={{width: '30%'}}/>
                </Grid>

            </Grid>
    </Container>
    )
}