import './css/Welcome.css';
import './css/nav.css'
import'./css/nav-bar.css'
import {Nav} from './NavBar';
import { BiSearchAlt } from 'react-icons/bi';
import {useSelector, useDispatch} from 'react-redux';
import {checkDow} from '../action';



// This is the home welcome age. THis is where everyone first comes when they are tyring to 
// access this website
function Stock() {


  const hold = useSelector(state => state.dow);
  
  const dispatch = useDispatch();

  const onLoad = () => {dispatch(checkDow(100 + hold));}

  const dow = <MarketData points={{value:hold}}/>

  const sp = <MarketData points={{value:hold}}/>


  return (
    // Begins the home page commponent. Holds the welcome box and component for nav boxes
    <div>

      <Nav/>

      <div id="center-page">
      
      <SearchBar/>
      <button onClick={onLoad}>Load</button>
      
      
    </div>

    {dow}
    {sp}
    </div>
    
    
    
    
    
    
  );
}

export default Stock;


function SearchBar(){

  return(
    
    <input id="search"></input>

  );
}


export function Bar(props) {


return (
  // Begins the home page commponent. Holds the welcome box and component for nav boxes
  
  <div id="bar"></div>

  
);
}

export function MarketData(props){


    var market_up = 
  <div className="marekt-flex">
    <div className="market_box">
      <div className="side_by_side">
        <h2>Dow Jones</h2>
        <h2>up</h2>
        <h3>{props.points.value}</h3>
      </div>
    </div>
  </div>

    
  
  return(

    market_up

    

  );
}





