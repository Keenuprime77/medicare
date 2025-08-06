'use client';

import Header from '@/components/header';
import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [date] = useState(new Date());
  const [curYear, setCurYear] = useState(date.getFullYear());
  const [curMonth, setCurMonth] = useState(date.getMonth());
  const [daysArray, setDaysArray] = useState([]);

  const Months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

 

  const renderCalendar = () => {
    const today = new Date();
    const firstDay = new Date(curYear, curMonth, 1).getDay();
    const lastDate = new Date(curYear, curMonth + 1, 0).getDate();
    const lastDay = new Date(curYear, curMonth, lastDate).getDay();
    const prevMonthLastDate = new Date(curYear, curMonth, 0).getDate();

    const days = [];

    // Previous month
    for (let i = firstDay; i > 0; i--) {
      days.push({ label: prevMonthLastDate - i + 1, className: 'inactive' });
    }

    // Current month
    for (let i = 1; i <= lastDate; i++) {
      const isToday =
        i === today.getDate() &&
        curMonth === today.getMonth() &&
        curYear === today.getFullYear();

      days.push({ label: i, className: isToday ? 'active' : '' });
    }

    // Next month
    for (let i = lastDay; i < 6; i++) {
      days.push({ label: i - lastDay + 1, className: 'inactive' });
    }

    setDaysArray(days);
  };

   useEffect(() => {
    renderCalendar();
  }, [curMonth, curYear]);
  
  const handleMonthChange = (direction) => {
    let newMonth = direction === 'prev' ? curMonth - 1 : curMonth + 1;
    let newYear = curYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurMonth(newMonth);
    setCurYear(newYear);
  };

  return (
    <div className='flex flex-col'>

      <Header></Header>
    <div className="cal m-auto">
      <header className="calendar-header">
        <p className="current-date">{Months[curMonth]} {curYear}</p>
        <div className="icons">
          <i className="ri-arrow-left-s-line prev" onClick={() => handleMonthChange('prev')} >&#60;</i>
          <i className="ri-arrow-right-s-line next" onClick={() => handleMonthChange('next')} >&gt;</i>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {daysArray.map((day, index) => (
            <li key={index} className={`day-item ${day.className}`}>{day.label}</li>
          ))}
        </ul>
      </div>
    </div>
            </div>
  );
};

export default Calendar;
