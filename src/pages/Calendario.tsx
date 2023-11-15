import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Sample.css';
import messagesByDate from './messagesByDate'; // Ruta al archivo messages.ts

function Calendario() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const clickedDate = `${date.getMonth() + 1}-${date.getDate()}`; // Mes y día en formato MM-DD

    const message = messagesByDate[clickedDate];
    if (message) {
      document.getElementById('titulo')!.innerText = message.title;
      document.getElementById('descripcion')!.innerText = message.description;
    } else {
      document.getElementById('titulo')!.innerText = '';
      document.getElementById('descripcion')!.innerText = '';
    }
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dateString = `${date.getMonth() + 1}-${date.getDate()}`; // Mes y día en formato MM-DD
    return messagesByDate[dateString] ? 'custom-day' : null;
  };

  return (
    <div>
      <h1>Calendario</h1>
      <Calendar onClickDay={handleDateClick} tileClassName={tileClassName} />
      <div id="mensaje">
        <h2 id="titulo"></h2>
        <p id="descripcion"></p>
      </div>
    </div>
  );
}

export default Calendario;
