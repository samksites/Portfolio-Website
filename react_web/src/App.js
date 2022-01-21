import {Routes,Route } from 'react-router-dom'
import Home from './componnents/Home'
import Stock from './componnents/stock_look_up'

function App() {
    
    return (
      // Begins the home page commponent. Holds the welcome box and component for nav boxes
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Stock-Look-Up" element={<Stock />} />
            

        </Routes>
        
        
     
    );
  }

  export default App;