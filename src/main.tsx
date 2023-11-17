import React from 'react'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App.tsx'
import Psa from './pages/Psa.tsx';
import Revistas from './pages/Revistas.tsx';
import Entrevistas from './pages/Entrevistas.tsx';
import Podcast from './pages/Podcast.tsx';
import Videoteca from './pages/Videoteca.tsx';
import Calendario from './pages/Calendario.tsx';

import './index.css'
import './index.css'

const root = createRoot(document.getElementById('root')!);

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

root.render(
  <Auth0Provider
  domain="dev-4658.auth0.com"
  clientId="<KEY>"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  >
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Auth0Provider>
)