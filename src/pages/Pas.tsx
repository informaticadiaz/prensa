import MainLayout from "../Layout/MainLayout"
import { useState } from 'react';
import Beneficios from "../components/Beneficios";
import Formularios from "../components/Formularios";

function Pas() {

  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState(1); // Inicialmente, la pestaña activa es la número 1

  // Función para cambiar la pestaña activa
  const changeTab = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <MainLayout>
        <div className="absolute top-12 left-0 right-0">
        <div className="flex flex-col items-center">

          <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-300">Plan de Acción Social</h1>
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

          <div className="tab-content mt-4">
            {activeTab === 1 && (<Beneficios />)}
            {activeTab === 2 && (<Formularios />)}
            {activeTab === 3 && (<div><h1>Contacto</h1></div>)}
          </div>

        </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Pas