import '../../css/Home-Page.css';
import { useNavigate } from 'react-router-dom';



/**
 * Used for navigation on Home page
 * @param {JSON} props = {descript: Word description of each button} 
 * @returns navigation buttons on the home page to other pages
 */
 const HomePageNav = (props) => {
      const navigate = useNavigate();
      const routeChange = () => {
        navigate(props.link);
      }
      
      return (
  
        // home class name for structure
        <div className="homePageNavButtons">
          {/* Navigation buttons  */}
          <button className="rainbow-box in"  type="button" onClick={routeChange}> <h2>{props.description}</h2></button>
        </div>
      );
    }

    export default HomePageNav;