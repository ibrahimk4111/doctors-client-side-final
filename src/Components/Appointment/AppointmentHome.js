import React, {useState} from 'react';
import AppointmentGridShow from './Booking/AppointmentGridShow';
import AppointmentHeader from './AppointmentHeader';

function AppointmentHome(){
  const [date, setDate] = useState(new Date());
    return(
        <>
          <AppointmentHeader date={date} setDate={setDate} />
          <AppointmentGridShow date={date} />
        </>
    )
}

export default AppointmentHome;