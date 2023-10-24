import React from 'react'
import './SelectTicket.css'

const SelectTicket=({ ticketType, selectedCount, name, TicketTypeChange, onCountChange, onNameChange })=> {
  return (
    <div className='ticket-container'>
          <div className='option-cont'>
            <label>Ticket type :</label>
            <select value={ticketType} onChange={TicketTypeChange}>
              <option value=""></option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div className='option-cont'>
            <label htmlFor="name" >EnterYour Name : </label>
            <input id="name"
              type="text"               
              value={name} 
              onChange={onNameChange} 
            />
          </div>
          
          <div className='option-cont'>
            <label>Number of Seats : </label>
            <input 
              type="number" 
              min="1" 
              value={selectedCount} 
              onChange={onCountChange} 
            />
          </div>
    </div>
    
      
  )
}

export default SelectTicket
