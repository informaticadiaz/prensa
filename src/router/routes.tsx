
import App from '../App.tsx';
import Psa from '../pages/Psa.tsx';
import Revistas from '../pages/Revistas.tsx';
import Entrevistas from '../pages/Entrevistas.tsx';
import Podcast from '../pages/Podcast.tsx';
import Videoteca from '../pages/Videoteca.tsx';
import Calendario from '../pages/Calendario.tsx';
import Economia from '../pages/Economia.tsx';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/psa',
    element: <Psa />,
  },
  {
    path: '/economia',
    element: <Economia />,
  },
  {
    path: '/revistas',
    element: <Revistas />,
  },
  {
    path: '/entrevistas',
    element: <Entrevistas />,
  },
  {
    path: '/podcast',
    element: <Podcast />,
  },
  {
    path: '/videoteca',
    element: <Videoteca />,
  },
  {
    path: '/calendario',
    element: <Calendario />,
  },
];

export default routes;
