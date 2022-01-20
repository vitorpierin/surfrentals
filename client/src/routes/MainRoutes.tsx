import {useRoutes} from 'react-router-dom';
import Home from '../pages/Home';
import NewRent from '../pages/NewRent';

export const MainRoutes = () => {
  return useRoutes([
    { path:'/', element: <Home/> },
    { path:'/newrent/:id', element: <NewRent /> }
  ]);
}