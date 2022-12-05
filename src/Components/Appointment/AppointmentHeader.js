import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

//material ui
import {Container, Grid} from '@mui/material';
import Calender from './Calender';

function AppointmentHeader({date, setDate}){

    const AppointmentBg = {
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: ' 100%',      
    }       
    return(
        <Container>
            <Grid container spacing={2} style={AppointmentBg} sx={{flexGrow: 1, mt: 5}}>
                <Grid xs={12} md={6}>
                   <Calender date={date} setDate={setDate} />
                </Grid>
                <Grid xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img alt="chair" src={chair} style={{width: '70%'}} />
                </Grid>
            </Grid>
            
      </Container>
    )
}

export default AppointmentHeader;