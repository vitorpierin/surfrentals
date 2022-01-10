import Header from './components/partials/Header';

import './App.css';
import { MainRoutes } from './routes/MainRoutes';

const App = () => {

  return (
      <div className='container'>
        <Header/>
        <MainRoutes/>

      </div>
  );
}

export default App;
