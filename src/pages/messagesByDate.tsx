// messages.ts
interface Message {
  title: string;
  description: string;
  imageUrl?: string; // Nueva propiedad opcional para la URL de la imagen
}

const messagesByDate: { [key: string]: Message } = {
  '11-15': {
    title: '¡Hiciste clic en el 15 de noviembre!',
    description: 'Descripción para el 15 de noviembre',
    imageUrl: 'tren.jpg',
  },
  '11-16': {
    title: '¡Hiciste clic en el 16 de noviembre!',
    description: 'Descripción para el 16 de noviembre',
    imageUrl: 'tren.jpg',
  },
  // Puedes agregar más fechas y mensajes con imágenes si es necesario
};

export default messagesByDate;

export type { Message };
