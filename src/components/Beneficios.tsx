import { Tab } from '@headlessui/react'
import { useState } from 'react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function Beneficios() {

  const [beneficios] = useState([
    {
      title: 'Utiles',
      requisitos: [
        '• Entrega de solicitud hasta el 31/5 de cada año.',
        '• Certificado de alumno regular del año en curso.',
        '• En caso de alumnos de 1° año, fotocopia de boletín de 6° ó 7° (según Plan Escolar) Constancia si adeuda o no materias (para el resto de los años)',
        '• Estar adherido al Plan de Acción Social (P.A.S.)',
        '• Adjuntar CBU',
      ],
    },
    {
      title: 'Estimulo Secundario',
      requisitos: [
        '• Entrega de feo hasta el 31/5 de cada año.',
        '• Certificado de alumno regular del año en curso.',
        '• En caso de alumnos de 1° año, fotocopia de boletín de 6° ó 7° (según Plan Escolar) Constancia si adeuda o no materias (para el resto de los años)',
        '• Estar adherido al Plan de Acción Social (P.A.S.)',
        '• Último recibo de haberes.',
        '• Adjuntar CBU',
      ],
    },
    {
      title: 'Estudios Terciarios',
      requisitos: [
        '• Entrega de solicitud hasta el 31/5 de cada año.',
        '• Certificado de alumno regular del año en curso.',
        '• En caso de alumnos de 1° año, fotocopia de boletín de 6° ó 7° (según Plan Escolar) Constancia si adeuda o no materias (para el resto de los años)',
        '• Estar adherido al Plan de Acción Social (P.A.S.)',
        '• Adjuntar CBU',
      ],
    },
    {
      title: 'Estudios Especiales',
      requisitos: [
       '• Entrega de solicitud hasta el 15/4 de cada año.',
       '• Certificado de alumno regular extendido por Escuela Especial.',
       '• Certificado Nacional de discapacidad o Certificado Médico con diagnóstico.',
       '• Último recibo de haberes.',
       '• Estar adherido al Plan de Acción Social (P.A.S.)', 
       '• Adjuntar CBU',
      ]
    },
    {
      title: 'Regalo Por Casamiento',
      requisitos: [
        '10 días de estadía gratis c/media pensión en uno de nuestros Centros Turísticos, incluyendo gastos de pasaje en micro ida y vuelta.',
        'ACLARACIÓN: en caso de que por razones de fuerza mayor, el afiliado no pueda realizarlo, se le concederá dinero en efectivo.',
        '• Entrega de Solicitud 60 días antes.',
        '• Turno del Registro Civil.',
        '• Último recibo de haberes.',
        '• Estar adherido al Plan de Acción Social (P.A.S.)',
      ],
    },
    {
      title: 'Beneficio por Luna de Miel',
      requisitos: [
        'Además del REGALO POR CASAMIENTO, se abonará al socio/a que contraiga nupcias el importe correspondiente.',
        '• Entrega de Solicitud hasta 60 días posteriores al Casamiento.',
        '• Certificado de Matrimonio.',
        '• Último recibo de haberes.',
        '• Estar adherido al Plan de Acción Social (P.A.S.)',
        '• Adjuntar CBU',
      ],
    },
    {
      title: 'Regalo por Nacimiento',
      requisitos: [
        'Ajuar y cochecito para el recién nacido hijo de socio. ',
        '• Entrega de solicitud 60 días antes de la fecha probable de parto.',
        '• Certificado Pre Natal.',
        '• Último recibo de haberes.',
        '• Estar adherido al Plan de Acción Social (P.A.S.)',
      ],
    },
    {
      title: 'Beneficio Por Natalidad',
      requisitos: [
        'Además del REGALO POR NACIMIENTO se abonará por nacimiento o adopción del afiliado, el importe correspondiente. ',
        '• Entrega de Solicitud hasta 60 días posteriores al Nacimiento o Adopción.',
        '• Certificado de Nacimiento o Adopción.',
        '• Último recibo de haberes.',
        '• Estar adherido al Plan de Acción Social (P.A.S.)',
        '• Adjuntar CBU',
      ],
    },
    {
      title: 'Mas Beneficios',
      requisitos: [
        'Aparte de los Beneficios ya nombrados el afiliado cuenta con los siguientes beneficios',
        'Premio Reconociemto a Jubilados y vitalicios',
        'Servicio de Sepelio',
        'Prestamos Personales',
        'Convenio Libreria',
        <span dangerouslySetInnerHTML={{__html: '<a href="https://drive.google.com/file/d/18P0sC6kxhQACE2fWVniZLkIEOqBl-9mt/view?usp=sharing">Ver todos los beneficios aca</a>'}}></span>,
      ],
    }
  ]);

  return (
    <div>
      <div className="px-2 py-15 sm:px-0">
        <Tab.Group>
          <div className="flex">
            <Tab.List className="flex flex-col space-y-1 mr-4 rounded-xl bg-greenUF p-1 w-[20vw]">
              {beneficios.map((category) => (
                <Tab
                  key={category.title}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white/60 ring-offset-2 ring-offset-greenUF focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-greenUF shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2 w-[60vw]">
              {beneficios.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-greenUF p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {category.requisitos.map((requisito, requisitoIdx) => (
                      <li key={requisitoIdx} className="rounded-md p-3">
                        <ul className="text-sm font-bold leading-1">
                          <p>{requisito}</p>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Beneficios;
