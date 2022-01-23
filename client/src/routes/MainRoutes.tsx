import {useRoutes} from 'react-router-dom';
import Home from '../pages/Home';
import NewRent from '../pages/NewRent';
import Dashboard from '../pages/Dashboard';

export const MainRoutes = () => {
  return useRoutes([
    { path:'/', element: <Home/> },
    { path:'/newrent/:id', element: <NewRent /> },
    { path:'/dashboard', element: <Dashboard/> }
  ]);
}