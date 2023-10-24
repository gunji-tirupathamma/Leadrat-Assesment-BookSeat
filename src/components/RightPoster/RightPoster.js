import React, { useState } from 'react'
import SelectTicket from '../SelectTicketTypeContainer/SelectTicket'
import SeatsContainer from '../SeatsContainer/SeatsContainer'
import TimeDate from '../TimeDateContainer/TimeDate'
import BookedDetails from '../BookedDetailsTable/BookedDetails'

import './RightPoster.css'

const RightPoster=() =>{
  const[ticketType,setTickettype]=useState()
  const[selectedCount,setSelectedCount]=useState()
  const[name,setName]=useState()
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const[bookingDetails,setBookingDetails]=useState([])

  const TicketTypeChange = (e) => {
    setTickettype(e.target.value);
  };


  const onCountChange=(e)=>{
    setSelectedCount(parseInt(e.target.value, 10));
  }

  const onNameChange=(e)=>{
    setName(e.target.value, 10);
  }

  const onSeatSelect = (seatNumber) => {
    setSelectedSeats([...selectedSeats, seatNumber]);
  };

  const onDateSelect = (date) => {
    setSelectedDate(date);
  };

  const onTimeSelect = (time) => {
    setSelectedTime(time);
  };

  

  return (
    <div className='right-container'>

        <TimeDate onDateSelect={onDateSelect} onTimeSelect={onTimeSelect}/>

        <SelectTicket  ticketType={ticketType}        
                  selectedCount={selectedCount}        
                  name={name}        
                  TicketTypeChange={TicketTypeChange}
                  onCountChange={onCountChange}
                  onNameChange={onNameChange}
        />

        <SeatsContainer onSeatSelect={onSeatSelect} selectedSeats={selectedSeats}/>

        <button >proceed</button>

        <BookedDetails  ticketType={ticketType}
                        selectedCount={selectedCount}
                        name={name}
                        selectedSeats={selectedSeats}
                        selectedDate={selectedDate}
                        selectedTime={selectedTime}
        />
    </div>
  )
}

export default RightPoster
