import MainLayout from "../Layout/MainLayout"
import { useState } from 'react';

function Pas() {

  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState(1); // Inicialmente, la pestaña activa es la número 1

  // Función para cambiar la pestaña activa
  const changeTab = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

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
        <div className="flex flex-col w-screen h-screen items-center">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-300">Plan de acción social</h1>
            <p className="text-blue-300 mt-2">Formularios del plan de acción social</p>
          </div>

          <div className="flex space-x-4 mb-4">
            <button
              className={`bg-green-700 hover:bg-green-800 text-slate-300 hover:text-slate-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === 1 ? 'border-b-2 border-green-900' : ''}`}
              onClick={() => changeTab(1)}
            >
              Beneficios
            </button>
            <button
              className={`bg-green-700 hover:bg-green-800 text-slate-300 hover:text-slate-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === 2 ? 'border-b-2 border-green-900' : ''}`}
              onClick={() => changeTab(2)}
            >
              Formularios
            </button>
            <button
              className={`bg-green-700 hover:bg-green-800 text-slate-300 hover:text-slate-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === 3 ? 'border-b-2 border-green-900' : ''}`}
              onClick={() => changeTab(3)}
            >
              Contacto
            </button>
          </div>



          <div className="tab-content mt-4 ">
            {activeTab === 1 && <div><h1>Beneficios</h1></div>}
            {activeTab === 2 && (
              <table className="w-full divide-y divide-gray-200 mt-5">
                <tbody className="bg-white divide-y divide-gray-200">
                  {pas.map((pasItem, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">{pasItem.content}</td>
                      <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"><a href={pasItem.url} className="text-gray-500">Descargar Formulario</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {activeTab === 3 && <div><h1>Contacto</h1></div>}
          </div>
        </div>

      </MainLayout>
    </>
  )
}

export default Pas