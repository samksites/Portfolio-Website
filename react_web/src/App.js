import {Switch,Route } from 'react-router-dom'
import Home from './componnents-css/Home'
import Stock from './componnents-css/stock_look_up'

function App() {
    
    return (
      // Begins the home page commponent. Holds the welcome box and component for nav boxes
        <Switch>
            <Route path="/Home">
                <Home/>
            </Route>

            <Route path="/Stock-Look-Up">
                <Stock/>
            </Route>
            

        </Switch>
        
        
     
    );
  }

  export default App;