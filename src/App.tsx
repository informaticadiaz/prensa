import { Link } from 'react-router-dom';

import logo from './assets/logo.webp'


import './App.css'

function App() {


  return (
    <>
      <div>
        <a href="http://prensa.ar" target="_blank">
          <img src={logo} className="logo react" alt="logo uf" />
        </a>
      </div>
      <div className="card">

        <button className='button'>
        <Link to="/desing" className="button">
          Diseños
        </Link>
        </button>
        <button className='button'>
        <Link to="/psa" className="button">
          PSA
        </Link>
        </button>
        <button className='button'>
         <Link to="/revistas" className="button">
          Revistas
        </Link>
        </button >
        <button className='button'>
        <Link to="/entrevistas" className="button">
          Entrevistas
        </Link>
        </button>
      </div>
      <p className="read-the-docs">
        Comunicacion Peronista para un sindicato organizado
      </p>
    </>
  )
}

export default App
