import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import CompanyScheduler from './pages/CompanyScheduler';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'companies', element: <CompanyScheduler /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      // { path: '/', element: <Navigate to="/login" /> },
      { path: '/', element: <Navigate to="/app/companies" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
