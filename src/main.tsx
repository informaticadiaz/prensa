import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Desing from './pages/Desing.tsx';
import Psa from './pages/Psa.tsx';
import Revistas from './pages/Revistas.tsx';
import Entrevistas from './pages/Entrevistas.tsx';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
