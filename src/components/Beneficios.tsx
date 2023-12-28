import { Tab } from '@headlessui/react'
import { useState } from 'react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


function Beneficios() {

  let [beneficios] = useState({
    Utiles: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        requisitoUno: '• Entrega de solicitud hasta el 31/5 de cada año.',
        requisitoDos: '• Certificado de alumno regular del año en curso.',
        requisitoTres: '• En caso de alumnos de 1° año, fotocopia de boletín de 6° ó 7° (según Plan Escolar) Constancia si adeuda o no materias (para el resto de los años)',
        requisitoCuatro: '• Estar adherido al Plan de Acción Social (P.A.S.)',
        requisitoCinco: '• Adjuntar CBU',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
    'Estimulo Secundario': [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        requisitoUno: '• Entrega de feo hasta el 31/5 de cada año.',
        requisitoDos: '• Certificado de alumno regular del año en curso.',
        requisitoTres: '• En caso de alumnos de 1° año, fotocopia de boletín de 6° ó 7° (según Plan Escolar) Constancia si adeuda o no materias (para el resto de los años)',
        requisitoCuatro: '• Estar adherido al Plan de Acción Social (P.A.S.)',
        requisitoCinco: '• Adjuntar CBU',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },

    ],
    'Estudios Terciarios': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        requisitoUno: '• Entrega de solicitud hasta el 31/5 de cada año.',
        requisitoDos: '• Certificado de alumno regular del año en curso.',
        requisitoTres: '• En caso de alumnos de 1° año, fotocopia de boletín de 6° ó 7° (según Plan Escolar) Constancia si adeuda o no materias (para el resto de los años)',
        requisitoCuatro: '• Estar adherido al Plan de Acción Social (P.A.S.)',
        requisitoCinco: '• Adjuntar CBU',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
    ],
  })


  return (
    
<div>
<div className="px-2 py-15 sm:px-0">
  <Tab.Group>
    <div className="flex">
      <Tab.List className="flex flex-col space-y-1 mr-4 rounded-xl bg-greenUF p-1 w-[20vw]">
        {Object.keys(beneficios).map((category) => (
          <Tab
            key={category}
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
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2 w-[60vw]">
        {Object.values(beneficios).map((posts, idx) => (
          <Tab.Panel
            key={idx}
            className={classNames(
              'rounded-xl bg-greenUF p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
<ul>
{posts.map((post) => (
  <li
    key={post.id}
    className="rounded-md p-3 "
  >
    <ul className="mt-1 space-x-1 text-xs font-bold leading-4">
      <p>{post.requisitoUno}</p>
      <p>{post.requisitoDos}</p>
      <p>{post.requisitoTres}</p>
      <p>{post.requisitoCuatro}</p>
      <p>{post.requisitoCinco}</p>

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
  )
}

export default Beneficios