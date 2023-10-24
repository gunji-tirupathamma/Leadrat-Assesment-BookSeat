import React from 'react'
import './BookedDetails.css'

const BookedDetails=({ ticketType, selectedCount, name, selectedSeats,selectedDate,selectedTime })=> {
  if (ticketType && selectedCount && name && selectedSeats.length > 0) {
    return (
      <div className="table-cont">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Tickettype</th>
              <th>Name</th>
              <th>No.Of.Tickets</th>
              <th>Time</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Replace these placeholders with actual data */}
              <td>{selectedDate}</td>
              <td>{ticketType}</td>
              <td>{name}</td>
              <td>{selectedCount}</td>
              <td>{selectedTime}</td>
              <td>{selectedSeats.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

export default BookedDetails
