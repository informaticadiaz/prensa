import MainLayout from './Layout/MainLayout';

import logo from './assets/logo.webp'



import './App.css'


function App() {



  return (
    <>
      <MainLayout>
        <div className='main-layout'>
          <div>
            <a href="http://prensa.ar" target="_blank">
              <img src={logo} className="logo react" alt="logo uf" />
            </a>
          </div>
          <p className="read-the-docs">
            Comunicacion Peronista para un Sindicato Organizado
          </p>
        </div>
      </MainLayout>
    </>
  )
}

export default App
