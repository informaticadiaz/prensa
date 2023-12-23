import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Sample.css';
import '../App.css'
import messagesByDate, {Message} from './messagesByDate'; 
import MainLayout from '../Layout/MainLayout';

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
    <>
    <MainLayout>
    <div className='flex-calendar main-layout'>
      <div>
      <Calendar onClickDay={handleDateClick} tileClassName={tileClassName} />
      </div>
      <div id="mensaje">
        {selectedMessage && (
          <>
            {/* <img src={selectedMessage.imageUrl} alt="Imagen" className="calendar-image"/> */}
            <p>{selectedMessage.description}</p>
          </>
        )}
      </div>
    </div>
    </MainLayout>
    </>
  );
}

export default Calendario;