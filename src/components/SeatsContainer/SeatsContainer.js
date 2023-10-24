import React from 'react'
import './SeatsContainer.css'

const SeatsContainer=({onSeatSelect,selectedSeats})=> {

    const rows = ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];

    const seats = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14',
                    '15','16','17','18','19','20','21','22','23','24'];

    const handleSeatClick = (seatNumber) => {
        onSeatSelect(seatNumber);
    };


  return (
    <div className='seats-container'>
        <div className='screen'>Screen</div>
        <div className='chairs-container'>
            {rows.map((row) => (
                <div key={row} className="row">
                    <span>{row}</span>
                    {seats.map((seat) => (
                    <li
                        key={seat}
                        className={`seat ${selectedSeats.includes(row + seat) ? 'selected' : ''}`}
                        onClick={() => handleSeatClick(row + seat)}
                    >
                        {row + seat}
                    </li>
                    ))}
                    <span>{row}</span>
                </div>
            ))}
        </div>
        <div className='about-chair'>
            <div className='details'>
              <li>Available</li>
              <li>Booked</li>
              <li>Selected</li>
            </div>  
            
        </div>
    </div>
  )
}

export default SeatsContainer
