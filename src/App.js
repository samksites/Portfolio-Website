import {Routes,Route, Navigate } from 'react-router-dom'
import HomePage from './componnents/home-page'
import PInfoPage from './componnents/PInfoPage';
import {useSelector} from 'react-redux';
import Loading from './componnents/loading';
import { useAuth0 } from '@auth0/auth0-react';


/**
 * Starting component that loads the whole app
 * @returns The whole web page
 */
function App() {

    // loads if the user is logged in or not so diffrent accesses can be achevied on the page
    const login = useSelector(state => state.canLogIn);
    
    const { isLoading } = useAuth0();

    if (isLoading) {
      return <Loading />;
    }
    return (
      // allows user to load diffrent routes "simulated pages"
      
      <Routes>
          {/* Creates path for home page and loads the home page commponent */}
          <Route path="/"  element={<HomePage />}/>
          <Route path="/about"  element={<PInfoPage />}/>

      </Routes>
      
    );
  }
  export default App;
