import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './TimeDate.css'

const TimeDate=({onDateSelect,onTimeSelect})=> {

    const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateSelect(date); // Pass the selected date to the parent component
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    onTimeSelect(time); // Pass the selected time to the parent component
  };

  return (
    <div className="datetime-cont">
        <div className='heading-cont'>
            <h3>Bhagavanth Kesari</h3>
            <p><FontAwesomeIcon icon={faClock} /> 165minutes</p>
        </div>
        <div className='date-type'>
            <div className='date-card'>
                <h6>Monday 23 Octomber</h6>
                <div className='day'>
                    <li onClick={() => handleDateClick("23-Oct")}>
                        <h6>Mon</h6>
                        <h6>23</h6>
                    </li>
                    <li onClick={() => handleDateClick("24-Oct")}>
                        <h6>Tue</h6>
                        <h6>24</h6>
                    </li>
                    <li onClick={() => handleDateClick("25-Oct")}>
                        <h6>Wed</h6>
                        <h6>25</h6>
                    </li>
                    <li onClick={() => handleDateClick("26-Oct")}>
                        <h6>Thu</h6>
                        <h6>26</h6>
                    </li>
                    <li onClick={() => handleDateClick("27-Oct")}>
                        <h6>Fri</h6>
                        <h6>27</h6>
                    </li>
                    <li onClick={() => handleDateClick("28-Oct")}>
                        <h6>Sat</h6>
                        <h6>28</h6>
                    </li>
                    <li onClick={() => handleDateClick("29-Oct")}>
                        <h6>Sun</h6>
                        <h6>29</h6>
                    </li>
                </div>
            </div>
            <div className='time-card'>
            <h6>Show Time</h6>
                <div className='day'>
                    <li onClick={() => handleTimeClick("10:00")}>
                        <h6>2D</h6>
                        <h6>10:00</h6>
                    </li>
                    <li onClick={() => handleTimeClick("12:00")}>
                        <h6>2D</h6>
                        <h6>12:00</h6>
                    </li>
                    <li onClick={() => handleTimeClick("14:00")}>
                        <h6>2D</h6>
                        <h6>14:00</h6>
                    </li>
                    <li onClick={() => handleTimeClick("17:00")}>
                        <h6>2D</h6>
                        <h6>17:00</h6>
                    </li>
                    <li onClick={() => handleTimeClick("18:00")}>
                        <h6>2D</h6>
                        <h6>18:00</h6>
                    </li>
                    <li onClick={() => handleTimeClick("20:00")}>
                        <h6>3D</h6>
                        <h6>20:00</h6>
                    </li>
                    <li onClick={() => handleTimeClick("10:00")}>
                        <h6>3D</h6>
                        <h6>10:00</h6>
                    </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimeDate
