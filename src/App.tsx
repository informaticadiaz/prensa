import { Link } from 'react-router-dom';

import SideBarMenu from './components/SideBarMenu';

import { SideBarMenuItem, SideBarMenuCard } from './types/types';

import logo from './assets/logo.webp'
import profileImage from "./assets/bill.jpeg";

import { 
  FcCustomerSupport,
  FcVideoProjector,
  FcCalendar,
  FcCamcorder,
  FcMusic,
 } from "react-icons/fc";




import './App.css'

function App() {

  const items:SideBarMenuItem[] = [
    {
      id: '1',
      label: 'PSA',
      icon: FcCustomerSupport,
      url: '/'
    },
    {
      id: '2',
      label: 'Videoteca',
      icon: FcVideoProjector,
      url: '/'
    },
    {
      id: '3',
      label: 'Calendario',
      icon: FcCalendar,
      url: '/'
    },
    {
      id: '4',
      label: 'Entrevistas',
      icon: FcCamcorder,
      url: '/'
    },
    {
      id: '5',
      label: 'Podcast',
      icon: FcMusic,
      url: '/'
    }
  ];
  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'Ignacio Diaz',
    title: 'Frontend Developer',
    photoUrl: profileImage,
    url: '/',
  }

  return (
    <>
      <SideBarMenu items={items} card={card} />
      <div className='home'></div>
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
