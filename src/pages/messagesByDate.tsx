// messages.ts
interface Message {
  title: string;
  description: string;
  imageUrl?: string; // Nueva propiedad opcional para la URL de la imagen
}

const messagesByDate: { [key: string]: Message } = {

  '1-12': {
    title: '¡Hiciste clic en el 12 de enero!',
    description: '12 de enero de 1984, Concesión del 1er ferrocarril en argentina.',
    imageUrl: 'tren.jpg',
  },
  '1-14': {
    title: '¡Hiciste clic en el 14 de enero!',
    description: '14 de enero de 1951, Perón inagura mas de 40 escuelas sindicales en todo el país.',
    imageUrl: 'tren.jpg',
  },  
  '1-23': {
    title: '¡Hiciste clic en el 23 de enero!',
    description: '23 de enero de 1945, con el decreto 1940 Perón establece el derecho a los trabajadores del goce de vacaciones pagas.',
    imageUrl: 'tren.jpg',
  },
  '2-19': {
    title: '¡Hiciste clic en el 19 de febrero!',
    description: '19 de febrero, cumpleaños Cristina Fernández de Kirchner.',
    imageUrl: 'tren.jpg',
  },
  '2-24': {
    title: '¡Hiciste clic en el 24 de febrero!',
    description: '24 de febrero de 1946, Perón gana las primeras elecciones. 24 de febrero año 1947, Perón proclama los derechos del trabajador.',
    imageUrl: 'tren.jpg',
  },
  '2-25': {
    title: '¡Hiciste clic en el 25 de febrero!',
    description: '25 de febrero, nacimiento de San Martín y de Néstor Kirchner.',
    imageUrl: 'tren.jpg',
  },
    // Marzo
    '3-01': {
      title: '¡Hiciste clic en el 1 de marzo!',
      description: '1 de marzo, Día de la trabajadora y el trabajador Ferroviario',
      imageUrl: 'tren.jpg',
    },
    '3-07': {
      title: '¡Hiciste clic en el 7 de marzo!',
      description: '7 de marzo, Día del trabajador Ferroportuario.',
      imageUrl: 'tren.jpg',
    },
    '3-08': {
      title: '¡Hiciste clic en el 8 de marzo!',
      description: '8 de marzo, Día internacional de la Mujer.',
      imageUrl: 'tren.jpg',
    },
    '3-11': {
      title: '¡Hiciste clic en el 11 de marzo!',
      description: '11 de marzo de 1973, el FREJULI gana las elecciones.',
      imageUrl: 'tren.jpg',
    },
    '3-16': {
      title: '¡Hiciste clic en el 16 de marzo!',
      description: '16 de marzo de 1949, Perón proclama la nueva constitución nacional.',
      imageUrl: 'tren.jpg',
    },
    '3-22': {
      title: '¡Hiciste clic en el 22 de marzo!',
      description: '22 de marzo, Cumpleaños de Mujica. Día mundial del agua.',
      imageUrl: 'tren.jpg',
    },
    '3-24': {
      title: '¡Hiciste clic en el 24 de marzo!',
      description: '24 de marzo, día de la Memoria, la verdad y la Justicia.',
      imageUrl: 'tren.jpg',
    },
    // Abril
    '4-02': {
      title: '¡Hiciste clic en el 2 de abril!',
      description: '2 de abril, Día del veterano y los caídos en Malvinas.',
      imageUrl: 'tren.jpg',
    },
    '4-09': {
      title: '¡Hiciste clic en el 9 de abril!',
      description: '9 de abril, Pascuas.',
      imageUrl: 'tren.jpg',
    },
    '4-15': {
      title: '¡Hiciste clic en el 15 de abril!',
      description: '15 de abril, Fecha límite entrega de solicitudes por estudio nivel terciario y universitarios, especiales y de rehabilitación.',
      imageUrl: 'tren.jpg',
    },
    '4-17': {
      title: '¡Hiciste clic en el 17 de abril!',
      description: '17 de abril, aniversario de la OSFE. Creada en 1944.',
      imageUrl: 'tren.jpg',
    },
    '4-24': {
      title: '¡Hiciste clic en el 24 de abril!',
      description: '24 de abril, Día de la acción por tolerancia y el respeto de los pueblos.',
      imageUrl: 'tren.jpg',
    },
    '4-27': {
      title: '¡Hiciste clic en el 27 de abril!',
      description: '27 de abril de 1979, aniversario del primer Paro general contra la dictadura militar.',
      imageUrl: 'tren.jpg',
    },
    '4-28': {
      title: '¡Hiciste clic en el 28 de abril!',
      description: '28 de abril, Día mundial de la seguridad y la salud en el trabajo.',
      imageUrl: 'tren.jpg',
    },
    '5-01': {
      title: '¡Hiciste clic en el 1 de mayo!',
      description: '1 de mayo, Día de la y el Trabajador.',
      imageUrl: 'tren.jpg',
    },
    '5-07': {
      title: '¡Hiciste clic en el 7 de mayo!',
      description: '7 de mayo, Nacimiento de Evita Perón.',
      imageUrl: 'tren.jpg',
    },
    '5-17': {
      title: '¡Hiciste clic en el 17 de mayo!',
      description: '17 de mayo, Día internacional contra la homofobia, la bifobia y la transfobia. Día mundial del reciclaje.',
      imageUrl: 'tren.jpg',
    },
    '5-18': {
      title: '¡Hiciste clic en el 18 de mayo!',
      description: '18 de mayo, Día de la escarapela.',
      imageUrl: 'tren.jpg',
    },
    '5-23': {
      title: '¡Hiciste clic en el 23 de mayo!',
      description: '23 de mayo de 1947, nace el partido justicialista.',
      imageUrl: 'tren.jpg',
    },
    '5-25': {
      title: '¡Hiciste clic en el 25 de mayo!',
      description: '25 de mayo de 1810, Día de la Revolución de Mayo. Año 2003 asunción de Néstor Kirchner.',
      imageUrl: 'tren.jpg',
    },
    '5-31': {
      title: '¡Hiciste clic en el 31 de mayo!',
      description: '31 de mayo, Fecha límite de entrega de formularios estímulo nivel secundario.',
      imageUrl: 'tren.jpg',
    },
    // Junio
    '6-02': {
      title: '¡Hiciste clic en el 2 de junio!',
      description: '2 de junio, Día del bombero voluntario.',
      imageUrl: 'tren.jpg',
    },
    '6-03': {
      title: '¡Hiciste clic en el 3 de junio!',
      description: '3 de junio, Día del Ni una Menos.',
      imageUrl: 'tren.jpg',
    },
    '6-04': {
      title: '¡Hiciste clic en el 4 de junio!',
      description: '4 de Junio de 1946, Perón asume la primer presidencia.',
      imageUrl: 'tren.jpg',
    },
    '6-09': {
      title: '¡Hiciste clic en el 9 de junio!',
      description: '9 de junio, Día de la resistencia Peronista.',
      imageUrl: 'tren.jpg',
    },
    '6-10': {
      title: '¡Hiciste clic en el 10 de junio!',
      description: '10 de junio, día la reafirmación de los derechos Argentinos sobre Malvinas.',
      imageUrl: 'tren.jpg',
    },
    '6-12': {
      title: '¡Hiciste clic en el 12 de junio!',
      description: '12 de junio de 1974, Perón hace su último discurso.',
      imageUrl: 'tren.jpg',
    },
    '6-14': {
      title: '¡Hiciste clic en el 14 de junio!',
      description: '14 de junio de 1982 fin de la guerra de Malvinas.',
      imageUrl: 'tren.jpg',
    },
    '6-16': {
      title: '¡Hiciste clic en el 16 de junio!',
      description: '16 de junio de 1955, bombardeo a la plaza de Mayo.',
      imageUrl: 'tren.jpg',
    },
    '6-17': {
      title: '¡Hiciste clic en el 17 de junio!',
      description: '17 de junio paso a la inmortalidad de Güemes.',
      imageUrl: 'tren.jpg',
    },
    '6-20': {
      title: '¡Hiciste clic en el 20 de junio!',
      description: '20 de junio, Día de la Bandera. Fallecimiento de Belgrano (año 1820). Año 1973 Perón vuelve definitivamente a la Argentina.',
      imageUrl: 'tren.jpg',
    },
    '6-28': {
      title: '¡Hiciste clic en el 28 de junio!',
      description: '28 de junio de 1973, Perón vuelve a la Argentina.',
      imageUrl: 'tren.jpg',
    },
    // Julio
  '7-01': {
    title: '¡Hiciste clic en el 1 de julio!',
    description: '1 de julio de 1974, paso a la inmortalidad de Juan Perón.',
    imageUrl: 'tren.jpg',
  },
  '7-09': {
    title: '¡Hiciste clic en el 9 de julio!',
    description: '9 de julio, día de la independencia Argentina.',
    imageUrl: 'tren.jpg',
  },
  '7-20': {
    title: '¡Hiciste clic en el 20 de julio!',
    description: '20 de julio, día del amigo.',
    imageUrl: 'tren.jpg',
  },
  '7-25': {
    title: '¡Hiciste clic en el 25 de julio!',
    description: '25 de julio de 1949, fundación del partido justicialista.',
    imageUrl: 'tren.jpg',
  },
  '7-26': {
    title: '¡Hiciste clic en el 26 de julio!',
    description: '26 de julio de 1952, paso a la inmortalidad de Evita. 26 de julio de 1949, proclamación del partido peronista femenino.',
    imageUrl: 'tren.jpg',
  },
  '7-29': {
    title: '¡Hiciste clic en el 29 de julio!',
    description: '29 de julio de 1966, Noche de los bastones largos.',
    imageUrl: 'tren.jpg',
  },
  // Agosto
  '8-02': {
    title: '¡Hiciste clic en el 2 de agosto!',
    description: '2 de agosto de 1948, la CGT lanza candidatura PERON-PERON.',
    imageUrl: 'tren.jpg',
  },
  '8-12': {
    title: '¡Hiciste clic en el 12 de agosto!',
    description: '12 de agosto, día internacional de las juventudes.',
    imageUrl: 'tren.jpg',
  },
  '8-17': {
    title: '¡Hiciste clic en el 17 de agosto!',
    description: '17 de agosto de 1850, paso a la inmortalidad de San Martín.',
    imageUrl: 'tren.jpg',
  },
  '8-20': {
    title: '¡Hiciste clic en el 20 de agosto!',
    description: '20 de agosto, día de las infancias.',
    imageUrl: 'tren.jpg',
  },
  '8-23': {
    title: '¡Hiciste clic en el 23 de agosto!',
    description: '23 de agosto de 1962, primer desaparecido de la dictadura trabajador de la UOM Felipe Vallese.',
    imageUrl: 'tren.jpg',
  },
  '8-28': {
    title: '¡Hiciste clic en el 28 de agosto!',
    description: '28 de agosto de 1948 Evita proclama los derechos de la ancianidad.',
    imageUrl: 'tren.jpg',
  },
  '8-29': {
    title: '¡Hiciste clic en el 29 de agosto!',
    description: '29 de agosto de 1857, hace su viaje inaugural LA PORTEÑA el primer tren en circular en la Argentina.',
    imageUrl: 'tren.jpg',
  },
  '8-30': {
    title: '¡Hiciste clic en el 30 de agosto!',
    description: '30 de agosto, Día de los Ferrocarriles Argentinos.',
    imageUrl: 'tren.jpg',
  },
  '8-31': {
    title: '¡Hiciste clic en el 31 de agosto!',
    description: '31 de agosto de 1951, Renunciamiento de Eva.',
    imageUrl: 'tren.jpg',
  },
  // Septiembre
  '9-01': {
    title: '¡Hiciste clic en el 1 de septiembre!',
    description: '1 de septiembre día del jubilado Ferroviario.',
    imageUrl: 'tren.jpg',
  },
  '9-16': {
    title: '¡Hiciste clic en el 16 de septiembre!',
    description: '16 de septiembre de 1955, Golpe de estado a Perón. Año 1969 huelga Ferroviaria de 19 días. Año 1976 Noche de los lápices.',
    imageUrl: 'tren.jpg',
  },
  '9-21': {
    title: '¡Hiciste clic en el 21 de septiembre!',
    description: '21° Cumpleaños de Curcio, Día del estudiante y de la primavera.',
    imageUrl: 'tren.jpg',
  },
  '9-22': {
    title: '¡Hiciste clic en el 22 de septiembre!',
    description: '22 de septiembre de 1982 Marcha por Paz, pan y trabajo',
    imageUrl: 'tren.jpg',
  },
  '9-23': {
    title: '¡Hiciste clic en el 23 de septiembre!',
    description: '23 de septiembre tercer triunfo electoral de Perón, Promulgación de la ley 13010 (voto Femenino)',
    imageUrl: 'tren.jpg',
  },
  '9-25': {
    title: '¡Hiciste clic en el 25 de septiembre!',
    description: '25 de septiembre de 1973, asesinato de José Ignacio Rucci secretaria general de la CGT.',
    imageUrl: 'tren.jpg',
  },
  '9-27': {
    title: '¡Hiciste clic en el 27 de septiembre!',
    description: '27 de septiembre de 1930, Aniversario nacimiento de la CGT. Primer secretario general es de la Unión Ferroviaria LUIS CERRUTI.',
    imageUrl: 'tren.jpg',
  },
  // Octubre
  '10-06': {
    title: '¡Hiciste clic en el 6 de octubre!',
    description: '6 de octubre, Aniversario de la Unión Ferroviaria.',
    imageUrl: 'tren.jpg',
  },
  '10-08': {
    title: '¡Hiciste clic en el 8 de octubre!',
    description: '8 de octubre de 1895, nace Juan Domingo Perón.',
    imageUrl: 'tren.jpg',
  },
  '10-12': {
    title: '¡Hiciste clic en el 12 de octubre!',
    description: '12 de octubre, Día del respeto a la diversidad cultural. Año 1973 Perón asume su tercer presidencia.',
    imageUrl: 'tren.jpg',
  },
  '10-15': {
    title: '¡Hiciste clic en el 15 de octubre!',
    description: '15 de octubre, de 1944, se da a conocer el estatuto del peón rural.',
    imageUrl: 'tren.jpg',
  },
  '10-17': {
    title: '¡Hiciste clic en el 17 de octubre!',
    description: '17 de octubre, Día de la Lealtad. Año 1945, día que Perón es liberado de la isla Martin García por movilización obrera.',
    imageUrl: 'tren.jpg',
  },
  '10-23': {
    title: '¡Hiciste clic en el 23 de octubre!',
    description: '23 de octubre de 1951, Inauguración del ferrocarril Roca electrificado.',
    imageUrl: 'tren.jpg',
  },
  '11-01': {
    title: '¡Hiciste clic en el 1 de noviembre!',
    description: '1 de noviembre, Día de todos los Santos.',
    imageUrl: 'tren.jpg',
  },
  '11-17': {
    title: '¡Hiciste clic en el 17 de noviembre!',
    description: '17 de noviembre, Día del militante.',
    imageUrl: 'tren.jpg',
  },
  '11-19': {
    title: '¡Hiciste clic en el 19 de noviembre!',
    description: '19 de noviembre de 1845, nace el ferrocarril en Argentina.',
    imageUrl: 'tren.jpg',
  },
  '11-20': {
    title: '¡Hiciste clic en el 20 de noviembre!',
    description: '20 de noviembre, Día de la Soberanía Nacional. Año 1845, batalla de la Vuelta de Obligado.',
    imageUrl: 'tren.jpg',
  },
  '11-22': {
    title: '¡Hiciste clic en el 22 de noviembre!',
    description: '22 de noviembre de  1949, Se establece la Gratuidad universitaria.',
    imageUrl: '11-22.jpeg',
  },
  '11-25': {
    title: '¡Hiciste clic en el 25 de noviembre!',
    description: '25 de noviembre, Día internacional de la eliminación de la violencia contra la mujer.',
    imageUrl: 'tren.jpg',
  },
  // Diciembre
  '12-02': {
    title: '¡Hiciste clic en el 2 de diciembre!',
    description: '2 de diciembre de 2007, asunción de Cristina Fernández de Kirchner como presidenta.',
    imageUrl: 'tren.jpg',
  },
  '12-08': {
    title: '¡Hiciste clic en el 8 de diciembre!',
    description: '8 de diciembre, Día de la virgen.',
    imageUrl: 'tren.jpg',
  },
  '12-09': {
    title: '¡Hiciste clic en el 9 de diciembre!',
    description: '9 de diciembre de 1945, día de la democracia.',
    imageUrl: 'tren.jpg',
  },
  '12-10': {
    title: '¡Hiciste clic en el 10 de diciembre!',
    description: '10 de diciembre de 1983, asunción de Raúl Alfonsín.',
    imageUrl: 'tren.jpg',
  },
  '12-17': {
    title: '¡Hiciste clic en el 17 de diciembre!',
    description: '17 de diciembre de 2001, estallido social.',
    imageUrl: 'tren.jpg',
  },
  '12-20': {
    title: '¡Hiciste clic en el 20 de diciembre!',
    description: '20 de diciembre de 2001, renuncia de De la Rúa.',
    imageUrl: 'tren.jpg',
  },
  '12-24': {
    title: '¡Hiciste clic en el 24 de diciembre!',
    description: '24 de diciembre, Nochebuena.',
    imageUrl: 'tren.jpg',
  },
  '12-25': {
    title: '¡Hiciste clic en el 25 de diciembre!',
    description: '25 de diciembre, Navidad.',
    imageUrl: 'tren.jpg',
  },
  '12-31': {
    title: '¡Hiciste clic en el 31 de diciembre!',
    description: '31 de diciembre, Fin de año.',
    imageUrl: 'tren.jpg',
  },

  // Puedes seguir añadiendo más fechas si es necesario
};


export default messagesByDate;

export type { Message };
