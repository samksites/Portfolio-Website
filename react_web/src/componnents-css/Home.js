
import './css/Welcome.css';
import './css/nav.css'
import { Link } from 'react-router-dom';


// This is the home welcome age. THis is where everyone first comes when they are tyring to 
// access this website
function Home() {
  return (
    // Begins the home page commponent. Holds the welcome box and component for nav boxes

    <div className="home">

      {/* Header holds the welcome box which is an h1*/}
      <div id="header">
        <div className="gradient-border" id="box"> <h1>Welcome</h1> </div>
      </div>

      {/* nav_buttons div is container boxes and NavButton components which allow users to move around */}
      <div className="nav_buttons">
        <NavButton descript={{describe:"Personal info"}}/>
        <Link to="/Stock-Look-Up">
          <NavButton descript={{describe:"Stock lookup application"}}/>
        </Link>
        
      </div>

      {/* nav_buttons div is container boxes and NavButton components which allow users to move around */}
      <div className="nav_buttons">
        <NavButton descript={{describe:""}}/>
        <NavButton descript={{describe:"Stock lookup"}}/>
      </div>

    </div>
  );
}

export default Home;

//___________________________________________________________
// nav button on the bottom


// exports the home component



export function NavButton(props) {

  // description of each nav button
    const description = props.descript
    return (

      // home class name for structure
      <div className="home">
        {/* Navigation buttons  */}
        <button className="gradient" type="button"> {description.describe}</button>
        
        
      </div>
    );
  }

