import {Routes,Route, Navigate } from 'react-router-dom'
import Home from './componnents/Home'
import Stock from './componnents/stock_look_up'
import Join from './componnents/NewUser'
import {useSelector} from 'react-redux';

/**
 * Starting component that loads the whole app
 * @returns The whole web page
 */
function App() {
    // loads if the user is logged in or not so diffrent accesses can be achevied on the page
    const login = useSelector(state => state.canLogIn);
    return (
      // allows user to load diffrent routes "simulated pages"
      <Routes>
          {/* Creates path for home page and loads the home page commponent */}
          <Route path="/" element={<Home />}></Route>

          <Route path="/NewUser" element={<Join/>}></Route>
          {/* Loads stock look up page only if user has logged in else directs back to home page*/}
          <Route path="/Stock-Look-Up" element={<GoHome log ={login}/>}> 
            <Route element={<Home/>}/>
          </Route>

         
      </Routes>
    );
  }
  export default App;

  /**
   * 
   * @param {boolean} props = {log: if the user is logged in or not}
   * @returns if the user is directed to wanted page or back home to login screen
   */
  function GoHome(props) {
    // if logged in go to wanted page if not Home
    return props.log ? <Stock/> : <Navigate to="/" />;
  }
