import React from 'react'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css'

import App from './App.tsx'
import Desing from './pages/Desing.tsx';
import Psa from './pages/Psa.tsx';
import Revistas from './pages/Revistas.tsx';
import Entrevistas from './pages/Entrevistas.tsx';

const root = createRoot(document.getElementById('root')!);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/desing",
    element: <Desing />,
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
  </React.StrictMode>,
  </Auth0Provider>
)
