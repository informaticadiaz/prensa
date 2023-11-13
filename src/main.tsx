import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import Psa from './pages/Psa.tsx';
import Revistas from './pages/Revistas.tsx';
import Entrevistas from './pages/Entrevistas.tsx';
import Podcast from './pages/Podcast.tsx';
import Videoteca from './pages/Videoteca.tsx';
import Calendario from './pages/Calendario.tsx';
import './index.css'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/psa",
    element: <Psa />,
  },
  {
    path: "/revistas",
    element: <Revistas />,
  },
  {
    path: "/entrevistas",
    element: <Entrevistas />,
  },
  {
    path: "/podcast",
    element: <Podcast />,
  },
  {
    path: "/videoteca",
    element: <Videoteca />,
  },
  {
    path: "/calendario",
    element: <Calendario />,   
  }

  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
