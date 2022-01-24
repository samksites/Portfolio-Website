import {Routes,Route } from 'react-router-dom'
import Home from './componnents/Home'
import Stock from './componnents/stock_look_up'
import {useSelector} from 'react-redux';

function App() {
  const logger = useSelector(state => state.canLogIn);
    return (
      <MainLoader logedIn = {logger}/>
    );
  }
  export default App;



  export function MainLoader(props){


    return(// Begins the home page commponent. Holds the welcome box and component for nav boxes
      <Routes>
          <Route path="/" element={<Home />} />
          {props.logedIn ? (
             <Route path="/Stock-Look-Up" element={<Stock />} />
          ) : (<Route path="/" element={<Home />} />)
        }
         
      </Routes>   );
  }