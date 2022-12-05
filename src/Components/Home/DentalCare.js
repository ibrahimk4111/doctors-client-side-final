import React from 'react';
import treatment from '../../assets/images/treatment.png'

//material Ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import Container from '@mui/material/Container';

export default function DentalCare(){
    return(
        <Container>
            <Grid container columnspacing={{xs: 3, md: 5}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', my: 20}} >
                <Grid xs={12} md={5}>
                    <img alt='treatment' src={treatment} style={{width: '400px'}}/>
                </Grid>
                
                <Grid xs={12} md={7} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 5}}>
                    <Typography variant='h3' sx={{fontWeight: 700}}> Exception Dental Care, On Your Terms </Typography>
                    <Typography variant='p' sx={{my: 3, textAlign: 'justify'}} > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    <Button variant='contained' sx={{width:150, backgroundColor: '#00bcd4'}}>Click Me</Button> 
                </Grid>
            </Grid>
        </Container>
    )
}