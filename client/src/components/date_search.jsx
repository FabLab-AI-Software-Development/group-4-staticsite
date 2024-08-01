import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const DateSearch = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedDate) {
        navigate(`/events?date=${selectedDate.toISOString().split('T')[0]}`);
      }
    };

    return (
        <div>
          <h1>Search Events by Date</h1>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      );
    };

export default DateSearch;