import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Sample.css';

function Calendario() {
  const [selectedDate, setSelectedDate] = useState(null);

  const messagesByDate = {
    '11-15': '¡Hiciste clic en el 15 de noviembre!',
    '11-16': '¡Hiciste clic en el 16 de noviembre!',
    // Puedes agregar más fechas y mensajes si es necesario
  };

  const handleDateClick = date => {
    setSelectedDate(date);
    const clickedDate = `${date.getMonth() + 1}-${date.getDate()}`; // Mes y día en formato MM-DD

    const message = messagesByDate[clickedDate];
    if (message) {
      document.getElementById('mensaje').innerText = message;
    } else {
      document.getElementById('mensaje').innerText = 'No hay mensaje para esta fecha.';
    }
  };

  const tileClassName = ({ date }) => {
    const dateString = `${date.getMonth() + 1}-${date.getDate()}`; // Mes y día en formato MM-DD
    return messagesByDate[dateString] ? 'custom-day' : null;
  };

  return (
    <div>
      <h1>Calendario</h1>
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={tileClassName}
      />
      <div id="mensaje"></div>
    </div>
  );
}

export default Calendario;
