import React from 'react';
import BookingModal from './BookingModal';
import {Paper, Grid, Typography} from '@mui/material';


export default function BookingCard(props){
const date = props.date
const {_id, name, slots} = props.bookingCard;

return(
        <>
        <Grid item sx={12} sm={6} md={4}>
            <Paper elevation={2} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 3}}>
                <Typography variant='h5' color= '#00bed9'  display="block" gutterBottom sx={{textAlign: 'center', fontWeight: '600'}}>{name} </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{textAlign: 'center'}}> {slots[0]} </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{textAlign: 'center'}}> Available Spaces {slots.length} </Typography>
                {/* Going for Booking Modal which is the modal of website  */}
                <BookingModal key={_id} date={date} id={_id} name={name} slots={slots}></BookingModal> 
            </Paper>
        </Grid>
        </>
    
)}