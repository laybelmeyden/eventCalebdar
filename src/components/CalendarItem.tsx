import { Calendar } from 'antd';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';

interface CalendarItemProps {
  events: IEvent[]
}


const CalendarItem:FC<CalendarItemProps> = () => {
  return <div><Calendar /></div>;
};

export default CalendarItem;
