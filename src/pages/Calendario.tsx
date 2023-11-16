import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Sample.css';
import messagesByDate, { Message } from './messagesByDate'; // Ruta al archivo messages.ts

function Calendario() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleDateClick = (date: Date) => {
    const clickedDate = `${date.getMonth() + 1}-${date.getDate()}`;
    const message = messagesByDate[clickedDate] || null;
    setSelectedMessage(message);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dateString = `${date.getMonth() + 1}-${date.getDate()}`;
    return messagesByDate[dateString] ? 'custom-day' : null;
  };

  return (
    <div className='flex-calendar'>
      <div>
      <h1>Calendario</h1>
      <p>Selecciona una fecha para ver el mensaje correspondiente.</p>
      <Calendar onClickDay={handleDateClick} tileClassName={tileClassName} />
      </div>
      <div id="mensaje">
        {selectedMessage && (
          <>
            <h2>{selectedMessage.title}</h2>
            <img src={selectedMessage.imageUrl} alt="Imagen" className="calendar-image"/>
            <p>{selectedMessage.description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Calendario;
