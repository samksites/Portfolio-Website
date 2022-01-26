import {Routes,Route, Navigate } from 'react-router-dom'
import Home from './componnents/Home'
import Stock from './componnents/stock_look_up'
import {useSelector} from 'react-redux';

function App() {
    const login = useSelector(state => state.canLogIn);
    return (
      <Routes>
          <Route path="/" element={<Home />}> 
          </Route>
          <Route path="/Stock-Look-Up" element={<GoHome log ={login}/>}> 
            <Route element={<Home/>}/>
          </Route>

         
      </Routes>
    );
  }
  export default App;


  function GoHome(props) {
    console.log(props.log);
    return props.log ? <Stock/> : <Navigate to="/" />;
  }
