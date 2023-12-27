import MainLayout from "../Layout/MainLayout"
import { useState } from 'react';
import { Tab } from '@headlessui/react'


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function Pas() {

  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState(1); // Inicialmente, la pestaña activa es la número 1

  // Función para cambiar la pestaña activa
  const changeTab = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })


  const pas = [
    {
      content: "Utiles",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=sharing",
    },
    {
      content: "Estimulo Secundario",
      url: "https://drive.google.com/file/d/18MhZh4IW-ygWE5QlhJdt4wlL4TZ96Y4v/view?usp=sharing",
    },
    {
      content: "Estudios Especiales",
      url: "https://drive.google.com/file/d/18HBFnGYSyqbp7uX0Z0foki3282b63fl2/view?usp=sharing",
    },
    {
      content: "Casamiento",
      url: "https://drive.google.com/file/d/17sGf3rqPI80gjIMdUdyerWEOT1o41SaD/view?usp=sharing",
    },
    {
      content: "Luna de Miel",
      url: "https://drive.google.com/file/d/18Cg6WDQzb_xRmrQI6wBvS8WRBsZSy9AA/view?usp=sharing",
    },
    {
      content: "Natalidad",
      url: "https://drive.google.com/file/d/17nfeaeIHacwBmgqM7uFPoMTmo5fAhc_D/view?usp=sharing",
    },
    {
      content: "Nacimiento",
      url: "https://drive.google.com/file/d/17vwePMBpQ0e2UqM-CXctqI62OPOhDtOF/view?usp=sharing",
    },
    {
      content: "Premio Jubilado",
      url: "https://drive.google.com/file/d/185rLUTalH7xmMC8G_XJ_P_v7B2oaJktb/view?usp=sharing",
    }
  ]



  return (
    <>
      <MainLayout>

        <div className="flex flex-col w-[80%] h-screen items-center mx-16">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-300">Plan de acción social</h1>
          </div>

          <div className="flex space-x-4 mb-4">
            <button
              className={`bg-greenUF hover:bg-greenUF6 text-slate-300 hover:text-slate-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === 1 ? 'border-b-2 border-greenUF' : ''}`}
              onClick={() => changeTab(1)}
            >
              Beneficios
            </button>
            <button
              className={`bg-greenUF hover:bg-greenUF6 text-slate-300 hover:text-slate-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === 2 ? 'border-b-2 border-greenUF' : ''}`}
              onClick={() => changeTab(2)}
            >
              Formularios
            </button>
            <button
              className={`bg-greenUF hover:bg-greenUF6 text-slate-300 hover:text-slate-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === 3 ? 'border-b-2 border-greenUF' : ''}`}
              onClick={() => changeTab(3)}
            >
              Contacto
            </button>
          </div>



          <div className="tab-content mt-4 w-4/5 ">
            {activeTab === 1 && (
              <div>
                <h1>Beneficios</h1>
                <div className="px-2 py-16 sm:px-0">
                  <Tab.Group>
                    <div className="flex">
                      <Tab.List className="flex flex-col space-y-1 mr-4 rounded-xl bg-blue-900/20 p-1 w-1/3">
                        {Object.keys(categories).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                  ? 'bg-white text-blue-700 shadow'
                                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                            }
                          >
                            {category}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2 w-2/3">
                        {Object.values(categories).map((posts, idx) => (
                          <Tab.Panel
                            key={idx}
                            className={classNames(
                              'rounded-xl bg-white p-3',
                              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                          >
                            <ul>
                              {posts.map((post) => (
                                <li
                                  key={post.id}
                                  className="relative rounded-md p-3 hover:bg-gray-100"
                                >
                                  {/* Contenido de cada pestaña */}
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

            )}
            {activeTab === 2 && (
              <div>
                <p className="text-blue-300 mt-2">Formularios del plan de acción social</p>
                <table className="w-full divide-y divide-gray-200 mt-5 rounded-xl overflow-hidden">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pas.map((pasItem, index) => (
                      <tr key={index}>
                        <td className="px-6 py-3 bg-greenUF text-left text-xs leading-4 font-bold text-slate-300 uppercase tracking-wider">{pasItem.content}</td>
                        <td className="px-6 py-3 bg-greenUF text-left text-xs leading-4 font-bold text-slate-300 uppercase tracking-wider"><a href={pasItem.url} className="font-bold text-slate-300">Descargar Formulario</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 3 && <div><h1>Contacto</h1></div>}
          </div>
        </div>

      </MainLayout>
    </>
  )
}

export default Pas