import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Desing from './Desing.tsx';
import Psa from './Psa.tsx';
import Revistas from './Revistas.tsx';
import Entrevistas from './Entrevistas.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
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
