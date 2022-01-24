
import '../css/Home-Page.css';
import '../css/Navigation.css';
import '../css/general.css'
import '../css/login.scss'
import {FaLock, FaUnlock} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import { Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {log} from '../action';


// This is the home welcome age. THis is where everyone first comes when they are tyring to 
// access this website
function Home(props) {

    const dispatch = useDispatch();

    const loginTime = () => {dispatch(log(1));}

    const login = useSelector(state => state.login_page);

    var loginPage = <LoginScreen log={{value : login}}/>

  // Displays loged in or loged out lock symbols
  var lock;
  if (0 == 0){
    lock = 
    <div className='rainbow-box' id='login-box' onClick={loginTime}>
    <p className='lock-text' >Login</p>
    <FaLock className='loginButton' size='1.5em'/>
  </div>

  } else{
    lock = 
    <div className='rainbow-box' id='login-box'>
      <p className='lock-text'>Login</p>
      <FaUnlock className='loginButton' size='1.5em'/>
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


      <div className="home_nav_buttons" id='lock-icon'>
        {lock}
      </div>
      {loginPage}
    </div>
  );
}

export default Home;



//___________________________________________________________
// nav button on the bottom


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



  export function LoginScreen(props){
    
    var loginScreen = <div></div>;

    var fadded = 'fadeBackground';
    var moveLogin = 'loginFormDown'
    if (props.log.value === 2){
       fadded = 'reverseBack';
       moveLogin = 'loginFormUp'
    }

    const dispatch = useDispatch();

    const moveOut = () => {
      dispatch(log(2));
      resetLogin();
    }

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
            <button id='loginButton' onClick={sendLogin}>Login</button>
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

  async function sendLogin(){
    const userPas = {"user": document.getElementById("name").value, "password": document.getElementById("password").value};
    
    var returnValue = null;

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
    
    console.log(returnValue);
    
  }


  function resetLogin(){

    document.getElementById("name").value = "";
    document.getElementById("password").value = "";

  }

