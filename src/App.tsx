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
        
        <Link to="/psa" className="button">
          <button className='button'>
            PSA
          </button>
        </Link>
        
        <Link to="/revistas" className="button">
          <button className='button'>
            Revistas
          </button >
        </Link>

        <Link to="/entrevistas" className="button">
          <button className='button'>
            Entrevistas
          </button>
        </Link>
        
        <Link to="/podcast" className="button">
          <button className='button'>
            Podcast
          </button>
        </Link>

        <Link to="/videoteca" className="button">
          <button className='button'>
            Videoteca
          </button> 
        </Link>

        <Link to="/calendario" className="button">
          <button className='button'>
            Calendario
          </button>
        </Link>

      </div>
      <p className="read-the-docs">
        Comunicacion Peronista para un sindicato organizado
      </p>
    </>
  )
}

export default App
