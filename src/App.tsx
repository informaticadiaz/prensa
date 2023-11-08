import logo from './assets/logo.webp'

import './App.css'

function App() {


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="logo uf" />
        </a>
      </div>
      <h1>Herramientas de Prensa</h1>
      <div className="card">
        <button className='button'>
          Diseños
        </button>
        <button className='button'>
          PSA
        </button>
        <button className='button'>
          Revistas
        </button >
        <button className='button'>
          Entrevistas
        </button>
        <p>
          Vamos por mas
        </p>
      </div>
      <p className="read-the-docs">
        Comunicacion Peronista para un sindicato organizado
      </p>
    </>
  )
}

export default App
