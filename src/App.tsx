import { Link } from 'react-router-dom';

import MainLayout from './Layout/MainLayout';

import logo from './assets/logo.webp'



import './App.css'
import './index.css'

function App() {



  return (
    <>
      <MainLayout>
      <div className='home'></div>
      <div>
        <a href="http://prensa.ar" target="_blank">
          <img src={logo} className="logo react" alt="logo uf" />
        </a>
      </div>
      <p className="read-the-docs">
        Comunicacion Peronista para un sindicato organizado
      </p>
      </MainLayout> 
    </>
  )
}

export default App
