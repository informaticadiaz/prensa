import { Tab } from '@headlessui/react'
import { useState } from 'react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


// ... (código previo)

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
                        <ul className="mt-1 space-x-1 text-xs font-bold leading-4">
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
