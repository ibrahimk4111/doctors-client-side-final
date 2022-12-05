import React, { useState } from 'react';

import { FormControl, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import auth from '../../../firebase/firebase.init';

//react firebase hook
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export default function BookingModal({ id, date, name, slots }) {
  //firebase Hooks
  const [user] = useAuthState(auth)

  //Modal Open and Close
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //getting value from phone textfield
  const [phone, setPhone] = useState("");
  const phoneChange = e => {
    setPhone(e.target.value);
  };

  //Modal Submittion
  const handleSubmit = (Event) => {
    Event.preventDefault();

    // const BookingCardInfo = {
    //   treatmentId: id,
    //   treatmentName: name,
    //   treatmentDate: date,
    //   UserName: user.displayName,
    //   UserEmail: user.email,
    //   Phone: phone
    // }

  }

  return (
    <>
      <Button disabled={slots.length === 0} variant='contained' sx={{ backgroundColor: '#00bed9' }} onClick={handleOpen}>BOOK APPOINTMENT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h6' sx={{ fontWeight: '700' }}> {name} </Typography>
          <FormControl fullWidth >
            <TextField defaultValue={date.toDateString()} disabled sx={{ my: 3 }} />
            <TextField defaultValue={slots[0]} disabled />
            <TextField type="Name" defaultValue={user.displayName} disabled sx={{ my: 3 }} />
            <TextField name='phone' onChange={phoneChange} value={phone}/>
            <TextField type="email" defaultValue={user.email} disabled sx={{ my: 3 }} />
            <Button variant='contained' sx={{ backgroundColor: '#00bed9' }} onClick={handleSubmit}>Submit</Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}
