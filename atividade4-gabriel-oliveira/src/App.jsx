import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Home from './Home';
import Login from './Login';
import MenuPrivado from './MenuPrivado';
import MenuPublico from './MenuPublico';
import Usuario from './Usuario';
import ImcPage from './imc_page';
import withAuth from './withAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPublico />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: '/privado',
    element: <MenuPrivado />,
    children: [
      { index: true, element: <Navigate to="imc" replace /> },
      { path: 'imc', element: <ImcPage /> },
      { path: 'usuario', element: <Usuario /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
