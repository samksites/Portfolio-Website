
import '../css/Home-Page.css';
import '../css/Navigation.css';
import '../css/general.css'
import '../css/login.scss'
import {FaLock, FaUnlock} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import { Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {log, logIn} from '../action';


// This is the home welcome age. THis is where everyone first comes when they are tyring to 
// access this website
function Home(props) {

    // loads dispatch
    const dispatch = useDispatch();

    // sets up function call to pull up the login page
    const loginTime = () => {dispatch(log(1));}

    // pulls in the state of the login page
    const login = useSelector(state => state.login_page);

    // Gets the login screen components sends the value of what the login state should be
    var loginPage = <LoginScreen log={{value : login}}/>

  // Displays loged in or loged out lock symbols
  var lock;
  if (useSelector(state => state.canLogIn)){
    lock = 
      <div className='rainbow-box' id='login-box'>
        <p className='lock-text'>Login</p>
        <FaUnlock className='loginButton' size='1.5em'/>
      </div>

  } else{
    lock = 
      <div className='rainbow-box' id='login-box' onClick={loginTime}>
        <p className='lock-text' >Login</p>
        <FaLock className='loginButton' size='1.5em'/>
      </div>
  }
  return (
    // Begins the home page commponent. Holds the welcome box and component for nav boxes

    <div className="home">

      {/* Header holds the welcome box which is an h1*/}
      <div className='flexbox-1'>
        <div className="rainbow-border white-txt flexbox-1" id="welcome-box"> <h1>Welcome</h1> </div>
      </div>


      {/* nav_buttons div is container boxes and NavButton components which allow users to move around */}
      <div className="home_nav_buttons">
        
        <HomePageNav descript={{describe:"Personal info"}}/>
        <Link to="/Stock-Look-Up">
          <HomePageNav descript={{describe:"Stock lookup application"}}/>
        </Link>
      </div>
      
      {/* nav_buttons div is container boxes and NavButton components which allow users to move around */}
      <div className="home_nav_buttons">
        <HomePageNav descript={{describe:""}}/>
        <HomePageNav descript={{describe:"Stock lookup"}}/>
      </div>

      {/* Displays open or clsoe lock and the login page button*/}
      <div className="home_nav_buttons" id='lock-icon'>
        {lock}
      </div>
      {loginPage}
    </div>
  );
}

export default Home;

/**
 * Used for navigation on Home page
 * @param {JSON} props = {descript: Word description of each button} 
 * @returns navigation buttons on the home page to other pages
 */
export function HomePageNav(props) {

  // description of each nav button
    const description = props.descript
    return (

      // home class name for structure
      <div className="home">
        {/* Navigation buttons  */}
        <button className="rainbow-box" type="button"> <h2>{description.describe}</h2></button>
      </div>
    );
  }

  /**
   * Used to get the login form
   * @param {JSON} props = {log: {value: What state the login page should be at}}
   * @returns Login form component
   */
  export function LoginScreen(props){
    
    // temp div to be used if nothing is to be loaded
    var loginScreen = <div></div>;

    // next two elements are class names for loading login form
    var fadded = 'fadeBackground';
    var moveLogin = 'loginFormDown'

    // if tru login form dissapears
    if (props.log.value === 2){
       fadded = 'reverseBack';
       moveLogin = 'loginFormUp'
    }

    // gets dispatch
    const dispatch = useDispatch();

    // called when x button is click or submit
    const moveOut = () => {
      dispatch(log(2));
      resetLogin();
    }

    // used when submit button is clicked
    const sendEr = () => {
      dispatch(logIn(2));
      dispatch(log(2));
    }

    // if value greater then one load login form onto the page with two variations of form appearing or disapearing 
    if(props.log.value > 0){
      loginScreen =  // Login pannel
      <div id={fadded}>
        <div className='flexdirection-1' id={moveLogin}>
          <div className="flexbox-2">
            <button id='close' onClick={moveOut}>close</button>
          </div>
          <div className="flexbox-1" id="login-height">
            <h3><BsFillPersonFill id="figure"/> Login</h3>
          </div>
          <div className="form__group field" id="username-down">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
            <label htmlFor="name" className="form__label">Username</label>
          </div>
          <div className="form__group field" id='down'>
            <input type="password" className="form__field" placeholder="password" password="Pass" id='password' required />
            <label htmlFor="password" className="form__label">Password</label>
          </div>
          <div className='flexbox-1'>
            <button id='loginButton' onClick={() => sendLogin(sendEr)}>Login</button>
          </div>
          <div className='flexbox-1' id='newUser'>
            <a href='.......'>New user?</a>
          </div>
          <div className='flexbox-1' id='forgot'>
            <a href='.......'>Forgot password?</a>
          </div>
        </div>
      </div>
    }

    return(
      loginScreen
    )

  }

  /**
   * 
   * @param {function} dis is a function from LoginScreen called sendEr used to call the dispatch functions Login and Log
   */
  async function sendLogin(dis){
    // gets data the user inputed into the form
    const userPas = {"user": document.getElementById("name").value, "password": document.getElementById("password").value};
    
    // creates temp variable
    var returnValue = null;

    // calls web page api with a post call sends the users data off to see if its in the database
     const options  =  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPas),
    }
    await fetch("http://localhost:3001/login", options)
    .then( response => response.json())
    .then(data => {
      returnValue  = data.indicator;
    });
    
    // If found in datbase will accees the param passed into this function
    if(returnValue === 'found'){
      dis();
    }
  }

  /**
   * Utility function used to remove the username and password from the login form
   */
  function resetLogin(){

    document.getElementById("name").value = "";
    document.getElementById("password").value = "";

  }

