
import App from '../App.tsx';
import Pas from '../pages/Pas.tsx';
import Revistas from '../pages/Revistas.tsx';
import Entrevistas from '../pages/Entrevistas.tsx';
import Podcast from '../pages/Podcast.tsx';
import Videoteca from '../pages/Videoteca.tsx';
import Calendario from '../pages/Calendario.tsx';
import Economia from '../pages/Economia.tsx';
import Legales from '../pages/Legales.tsx';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pas',
    element: <Pas />,
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
  {
    path: '/legales',
    element: <Legales />,
  }
];

export default routes;
